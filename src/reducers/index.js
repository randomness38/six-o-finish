import { combineReducers } from 'redux';
import uuid from 'uuid';

import * as types from '../actions/actions';

const todos = (state = [], action) => {
  const addId = uuid();
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: addId,
          text: action.text,
          completed: false,
        },
      ];
    case types.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } return todo;
      });
    default: return state;
  }
};
//
// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state;
//       }
//
//       return {
//         ...state,
//         completed: !state.completed,
//       };
//     default:
//       return state;
//   }
// };
//
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action),
//       ];
//     case 'TOGGLE_TODO':
//       return state.map(t =>
//         todo(t, action));
//     default:
//       return state;
//   }
// };

const initialStateFilter = 'SHOW_ALL';

const visibilityFilter = (state = initialStateFilter, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};


const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
