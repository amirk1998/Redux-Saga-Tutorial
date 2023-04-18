import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSagas.jsx';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk, sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);
export default store;
