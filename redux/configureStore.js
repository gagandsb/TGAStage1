import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers/rootReducer';

const configureStore = (preloadedState) => {
  /**
   * Recreate the stdChannel (saga middleware) with every context.
   */

  const sagaMiddleware = createSagaMiddleware();

  // Choose compose method depending upon environment and platform
  const composeEnhancers = typeof window === 'object' ? composeWithDevTools : compose;

  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass
   * `preloadedState` when creating the store.
   */

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  /**
   * next-redux-saga depends on `sagaTask` being attached to the store.
   * It is used to await the rootSaga task before sending results to the client.
   */
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
