import { useState, useRef, useEffect, useCallback } from "react";
import isEqual from "lodash.isequal";

export interface UseUndoRedoOptions<T> {
  /**
   * Delay in milliseconds before committing state changes (debounce time).
   * Default is 500ms.
   */
  commitDelay?: number;

  /**
   * Maximum number of history entries to keep for undo/redo.
   * Older entries are discarded. Default is 50.
   */
  historyLimit?: number;

  /**
   * Optional callback invoked whenever the state is committed (finalized).
   * Receives the new committed state.
   */
  onCommit?: (state: T) => void;
}

export function useUndoRedo<T>(
  initialState: T,
  options: UseUndoRedoOptions<T> = {}
) {
  const delay = options.commitDelay ?? 500;
  const historyLimit = options.historyLimit ?? 50;
  const onCommit = options.onCommit;

  const [committedState, setCommittedState] = useState<T>(initialState); // 실제 커밋된 상태
  const [viewState, setViewState] = useState<T>(initialState); // view에 즉시 반영되는 상태

  const pendingStack = useRef<T[]>([]);
  const undoStack = useRef<T[]>([]);
  const redoStack = useRef<T[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false); // 커밋 차단 flag

  const pushWithLimit = (stack: T[], value: T) => {
    stack.push(value);
    if (stack.length > historyLimit) stack.shift();
  };

  const commitPending = useCallback(() => {
    if (isPausedRef.current) return;

    const pending = pendingStack.current;
    if (pending.length === 0) return;

    const last = pending[pending.length - 1];
    if (!isEqual(committedState, last)) {
      pushWithLimit(undoStack.current, committedState);
      redoStack.current = [];
      setCommittedState(last);
      onCommit?.(last);
    }

    pendingStack.current = [];
  }, [committedState, onCommit]);

  // pending 중인 변경 내역 즉시 확정
  const flush = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // 예약 제거
    commitPending();
  }, [commitPending]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(commitPending, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [viewState, delay, commitPending]);

  const set = useCallback((newState: T) => {
    pendingStack.current.push(newState);
    setViewState(newState);
  }, []);

  const undo = useCallback(() => {
    flush(); // pending 상태 즉시 반영
    if (undoStack.current.length === 0) return;

    const prev = undoStack.current.pop()!;
    pushWithLimit(redoStack.current, viewState);
    // 상태 업데이트
    setCommittedState(prev);
    setViewState(prev);

    onCommit?.(prev);
  }, [flush, viewState, onCommit]);

  const redo = useCallback(() => {
    flush(); // pending 상태 즉시 반영
    if (redoStack.current.length === 0) return;

    const next = redoStack.current.pop()!;
    pushWithLimit(undoStack.current, viewState);
    // 상태 업데이트
    setCommittedState(next);
    setViewState(next);

    onCommit?.(next);
  }, [flush, viewState, onCommit]);

  const pause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const reset = useCallback(
    (newState?: T) => {
      const s = newState ?? initialState;
      undoStack.current = [];
      redoStack.current = [];
      pendingStack.current = [];
      setCommittedState(s);
      setViewState(s);
      onCommit?.(s);
    },
    [initialState, onCommit]
  );

  // 수동 batch update
  const mergeLast = useCallback(() => {
    if (undoStack.current.length === 0) return;
    undoStack.current.pop();
    pushWithLimit(undoStack.current, viewState);
    setCommittedState(viewState);
    redoStack.current = [];
    onCommit?.(viewState);
  }, [viewState, onCommit]);

  return {
    /** Current state shown in the view (may be uncommitted) */
    state: viewState,

    /** Last committed state (stable undo/redo point) */
    committed: committedState,

    /** Function to update state (debounced commit) */
    set,

    /** Undo to previous committed state */
    undo,

    /** Redo to next committed state */
    redo,

    /** Immediately commit pending state changes */
    flush,

    /** Pause automatic committing of pending changes */
    pause,

    /** Resume automatic committing after pause */
    resume,

    /** Reset all stacks and state to initial or provided value */
    reset,

    /** Merge last two commits into one (batch update) */
    mergeLast,

    /** Whether undo is currently possible */
    canUndo: undoStack.current.length > 0,

    /** Whether redo is currently possible */
    canRedo: redoStack.current.length > 0,
  };
}
