import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';

export default class TodoList extends Component {

  filterTodos() {
    const todos = this.props.todos;
    switch (this.props.filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed === true);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => todo.completed === false);
      default:
        return todos;
    }
  }

  render() {
    return (
      <ul>
        {this.filterTodos().map((todo, index) =>
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired
};
