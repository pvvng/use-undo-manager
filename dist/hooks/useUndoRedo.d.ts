export interface UseUndoRedoOptions<T> {
    commitDelay?: number;
    historyLimit?: number;
    onCommit?: (state: T) => void;
}
export declare function useUndoRedo<T>(initialState: T, options?: UseUndoRedoOptions<T>): {
    state: T;
    committed: T;
    set: (newState: T) => void;
    undo: () => void;
    redo: () => void;
    flush: () => void;
    pause: () => void;
    resume: () => void;
    reset: (newState?: T) => void;
    mergeLast: () => void;
    canUndo: boolean;
    canRedo: boolean;
};
