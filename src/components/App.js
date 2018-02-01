import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// 여기서 parmas 받아도 되는데 filter 에 그냥 꽂아서 안쓴건가? 복습해봐
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};


export default App;
