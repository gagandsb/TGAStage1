import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import globalSagas from './sagas';
import globalReducers from './reducers';

const configureStore = (preloadedState) => {
  /**
   * Recreate the stdChannel (saga middleware) with every context.
   */

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  // Choose compose method depending upon environment and platform
  const composeEnhancers =
    typeof window === 'object' ? composeWithDevTools : compose;

  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass
   * `preloadedState` when creating the store.
   */

  const store = createStore(
    globalReducers,
    preloadedState,
    composeEnhancers(...enhancers)
  );

  /**
   * next-redux-saga depends on `sagaTask` being attached to the store.
   * It is used to await the rootSaga task before sending results to the client.
   */
  store.sagaTask = sagaMiddleware.run(globalSagas);

  return store;
};

export default configureStore;
