export interface UseUndoManagerOptions<T> {
    commitDelay?: number;
    historyLimit?: number;
    onCommit?: (state: T) => void;
}
export declare function useUndoManager<T>(initialState: T, options?: UseUndoManagerOptions<T>): {
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
