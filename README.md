# useUndoManager

A powerful React hook for managing undo/redo functionality with delayed commit and batch update support. Ideal for building complex, user-friendly state workflows such as form editors, drawing apps, and JSON builders.

[![npm version](https://img.shields.io/npm/v/use-undo-manager.svg?style=flat-square)](https://www.npmjs.com/package/use-undo-manager)
[![npm downloads](https://img.shields.io/npm/dw/use-undo-manager.svg?style=flat-square)](https://www.npmjs.com/package/use-undo-manager)
[![License](https://img.shields.io/npm/l/use-undo-manager.svg?style=flat-square)](LICENSE)

## Features

- Undo & Redo with history management
- Debounced (delayed) commits
- Batch updates in commit window
- View state vs Committed state separation
- Lightweight and framework-agnostic
- Manual merge for grouped commits
- Pause/resume commit queue
- Reset and flush utilities

## Installation

```bash
npm install use-undo-manager
```

## Simple Usage

```tsx
import { useUndoManager } from "use-undo-manager";

function TextEditor() {
  const {
    state,
    committed,
    set,
    undo,
    redo,
    flush,
    mergeLast,
    reset,
    pause,
    resume,
    canUndo,
    canRedo,
  } = useUndoManager<string>("Hello", {
    commitDelay: 500,
    historyLimit: 100,
    onChange: (committedValue) => {
      console.log("Committed:", committedValue);
    },
  });

  return (
    <div>
      <input
        value={state}
        onChange={(e) => set(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={undo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={redo} disabled={!canRedo}>
        Redo
      </button>
      <button onClick={flush}>Flush</button>
      <button onClick={mergeLast}>Merge Last</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => reset("Hello")}>Reset</button>
    </div>
  );
}
```

## ⚙️ API

### `const result = useUndoManager<T>(initialState, options?)`

#### Parameters:

| Name           | Type                       | Default | Description                         |
| -------------- | -------------------------- | ------- | ----------------------------------- |
| `initialState` | `T`                        | —       | Initial value for the state         |
| `options`      | `UseUndoManagerOptions<T>` | `{}`    | Optional settings for customization |

#### Options:

```ts
interface UseUndoManagerOptions<T> {
  /** Delay in milliseconds to commit changes (debounce window) */
  commitDelay?: number;

  /** Maximum number of undo/redo history entries to keep */
  historyLimit?: number;

  /** Callback called when the committed state changes */
  onChange?: (state: T) => void;
}
```

---

### Return values

| Name        | Type                  | Description                                                   |
| ----------- | --------------------- | ------------------------------------------------------------- |
| `state`     | `T`                   | Current view state that updates immediately                   |
| `committed` | `T`                   | Last committed state (used for undo/redo history)             |
| `set`       | `(value: T) => void`  | Updates the state; commits after debounce delay               |
| `undo`      | `() => void`          | Undo the last committed change                                |
| `redo`      | `() => void`          | Redo the last undone change                                   |
| `flush`     | `() => void`          | Immediately commits any pending changes                       |
| `mergeLast` | `() => void`          | Replaces last committed state with current view state (batch) |
| `pause`     | `() => void`          | Temporarily pauses committing changes                         |
| `resume`    | `() => void`          | Resumes committing after pause                                |
| `reset`     | `(value?: T) => void` | Resets state and clears history                               |
| `canUndo`   | `boolean`             | Whether undo is currently possible                            |
| `canRedo`   | `boolean`             | Whether redo is currently possible                            |

## Concepts

- viewState: State immediately updated by set(). Used in UI.
- committedState: State committed after debounce delay. Used in undo/redo history.
- pendingStack: Queue of values waiting to be committed.
- undoStack / redoStack: History stacks for state changes.

## Advanced Use Cases

- Grouping complex state transitions using mergeLast()
- Temporarily disabling commits during programmatic changes via pause()/resume()
- Manually controlling timing of batch commits with flush()

## Contributing

Feel free to open issues or pull requests!
If you have ideas or edge cases you’d like supported, let’s discuss it on GitHub.
