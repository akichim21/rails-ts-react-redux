import { reducers } from "reducers/";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { createLogger } from "redux-logger";

export function configureStore(): Store<any> {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      combineReducers({
        ...reducers,
      }),
      {},
    );
  } else {
    const store: Store<any> = createStore(
      combineReducers({
        ...reducers,
      }),
      {},
      applyMiddleware(
        createLogger(),
      ),
    );

    if (module.hot) {
      module.hot.accept('../reducers', (): void => {
        store.replaceReducer(
          combineReducers({
            ...(require('../reducers').reducers),
          }),
        );
      });
    }
    return store;
  }
}
