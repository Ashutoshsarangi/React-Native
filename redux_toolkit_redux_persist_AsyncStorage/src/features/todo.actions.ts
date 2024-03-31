import {addTodo} from './todo.slice';

export const addAsyncTodo = todoMessage => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(addTodo(todoMessage));
    }, 3000);
  };
};
