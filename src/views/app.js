import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import {connect} from 'react-redux';
import maps from '../actions/maps.js';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <AddTodo
          onAddClick={text => this.props.onAddClick(text)}
        />
        <TodoList
          todos={this.props.todos}
          filter={this.props.filter}
          onTodoClick={index => this.props.onTodoClick(index)}
        />
        <Footer
          filter={this.props.filter}
          onFilterChange={filter => this.props.onFilterChange(filter)}
        />
      </Fragment>
    );
  }
}

App.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  filter: PropTypes.string.isRequired
};

export default connect(maps.stateToProps, maps.dispatchToProps)(App);
