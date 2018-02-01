import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from '../components/App';

// 여기서 => {} (X)
// => () (O)
// body 가 한줄이니까. 잔소리 쩔어요
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default Root;
