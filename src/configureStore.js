import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// 이 todoApp 이 어디서 오는건지 모르겠어 root reducer 이름이여야 하지 않나?
import todoApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(todoApp, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default configureStore;
