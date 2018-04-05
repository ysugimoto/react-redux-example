import Types from './types.js';

const stateToProps = state => {
  console.log(state);
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  };
};

const dispatchToProps = dispatch => ({
  onAddClick(text) {
    dispatch({
      type: Types.ADD_TODO,
      text
    });
  },
  onTodoClick(index) {
    dispatch({
      type: Types.COMPLETE_TODO,
      index
    });
  },
  onFilterChange(filter) {
    dispatch({
      type: Types.SET_VISIBILITY_FILTER,
      filter
    });
  }
});

export default {
  stateToProps,
  dispatchToProps
};
