import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// Action Creaotr 에서 id 를 추가하려면 let 으로 Creator 내부에서 선언.
// export function addTodo(text) {
//   const addId = uuid();
//   return { type: ADD_TODO, id: addId, text };
// }
//
// // 여기 꼭 id 로 바꾼다
// export function toggleTodo(id) {
//   return { type: TOGGLE_TODO, id };
// }
//
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};
