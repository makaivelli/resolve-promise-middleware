# Resolve Promise Middleware

`resolve-promise-middleware` combined with `redux-promise-middleware` allows to use the resolved value of an async payload without accessing the store.

## Install
```sh
$ npm install resolve-promise-middleware --save
```

### Setup
Apply it before `promiseMiddleware`

```js
import promiseMiddleware from 'redux-promise-middleware';
import { resolvePromiseMiddleware } from "resolve-promise-middleware";

composeStoreWithMiddleware = applyMiddleware(
    resolvePromiseMiddleware
    promiseMiddleware(),
)(createStore)
```

## Usage

### action.js

```js
const asyncAction = () => ({
  type: 'PROMISE',
  payload: new Promise(...)
})
```

### component.js
```js
getDogs().then(dogs => this.dogs = dogs);
```

### service.js
```
getDogs() {
    return store.dispatch(asyncAction)
        .catch(handleError)
```

