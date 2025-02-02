## Framework-independent, writable, trackable store

**490 gzipped bytes** of powerful state-management!

A [Store](https://cefn.com/lauf/api/types/_lauf_store.Store.html) maintains a protected reference to an Immutable array or object `state`. It brokers all changes to `state`, enabling app interfaces and business logic to track modifications through Selectors.

It is incredibly simple, lightweight and framework-independent, and therefore suited to manage state within almost any server-side or client-side Typescript or Javascript project.

## Usage

### Track State

```typescript
// using a watcher
store.watch((state) => console.dir(state));

// using a selector and a memoizing React Hook
import { useSelected } from "@lauf/store-react";
const counter = useSelected(store, (state) => state.counter);

// using a selector and a memoizing event queue (framework independent)
import { followSelector } from "@lauf/store-follow";
followSelector(
  store,
  (state) => state.counter,
  (counter, { exit }) => {
    console.log(`Counter is ${counter}`);
    if (counter > 10) return exit(counter);
  }
);
```

### Read and Write State

```typescript
// read state
const state = store.read();

// write state using immutable patterns
store.write({
  ...state,
  counter: state.counter + 1,
});

// write state using drafted state object
import { edit } from "@lauf/store-edit";
edit(store, (draft) => (draft.counter += 1));
```

### Import OR Require

```javascript
import { createStore } from "@lauf/store"; // for esm
const { createStore } = require("@lauf/store"); // for commonjs
```

### Create a Store in Javascript

```javascript
const store = createStore({ counter: 0 });
```

### Create a Store In Typescript

```typescript
interface CounterState {
  counter: number;
}

const INITIAL_STATE = {
  counter: 0,
} as const;

const store = createStore<CounterState>(INITIAL_STATE);
```

## Getting Started

### Install

```zsh
npm install @lauf/store
```

### Demonstration Apps

Our [Example Counter Apps](https://github.com/cefn/watchable/tree/main/apps) offer minimal demonstrations of `@lauf/store`

- Web Frameworks
  - [with React](https://github.com/cefn/watchable/tree/main/apps/counter-react-ts) (using [@lauf/store-react](https://github.com/cefn/watchable/tree/main/packages/store-react))
  - [with no framework](https://github.com/cefn/watchable/tree/main/apps/counter-dom-ts) (using [@lauf/store-follow](https://github.com/cefn/watchable/tree/main/packages/store-follow))
  - [with Preact](https://github.com/cefn/watchable/tree/main/apps/counter-preact-ts) (using [@lauf/store-react](https://github.com/cefn/watchable/tree/main/packages/store-react)) and aliased React
- Bundling
  - [via Commonjs](https://github.com/cefn/watchable/tree/main/apps/counter-dom-commonjs)
  - [via ESM](https://github.com/cefn/watchable/tree/main/apps/counter-dom-esm)
  - [for tiniest bundle](https://github.com/cefn/watchable/tree/main/apps/counter-dom-tiny) (a tree-shaken counter app in just 406 bytes!)
- Mainstream usage
  - Manage Immutability using [editable drafts](https://github.com/cefn/watchable/tree/main/apps/counter-react-ts-edit) - eliminates [Immutable update patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)
  - Access the store using [React Context API](https://github.com/cefn/watchable/tree/main/apps/counter-react-ts-edit-context) - eliminates [prop drilling](https://kentcdodds.com/blog/prop-drilling)
