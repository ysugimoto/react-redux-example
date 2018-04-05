import Types from './types';

const initialState = {
  visibilityFilter: Types.SHOW_ALL,
  todos: []
};

const visibilityFilter = (filter = 'SHOW_ALL', action) => {
  switch (action.type) {
    case Types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return filter;
  }
};

const todos = (todos = [], action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return todos.concat({
        text: action.text,
        completed: false
      });
    case Types.COMPLETE_TODO:
      return todos.reduce((prev, next, index) => {
        if (action.index === index) {
          next.completed = true;
        }
        prev.push(next);
        return prev;
      }, []);
    default:
      return todos;
  }
};

export default (state = initialState, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
};
