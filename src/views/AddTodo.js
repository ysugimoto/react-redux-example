import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.input = null;
  }

  render() {
    return (
      <Fragment>
        <input type='text' ref={node => (this.input = node)} />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </Fragment>
    );
  }

  handleClick() {
    const text = this.input.value.trim();
    this.props.onAddClick(text);
    this.input.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
