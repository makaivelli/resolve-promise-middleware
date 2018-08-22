# Return Promise Middleware

`return-promise-middleware` combined with `redux-promise-middleware` allows to use the resolved value of an async payload without accessing the store.

## Install
```sh
npm i --save github:makaivelli/return-promise-middleware
```

### Setup
Apply it before `promiseMiddleware`

```js
import promiseMiddleware from 'redux-promise-middleware';
import { resolvePromiseMiddleware } from "return-promise-middleware";

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

