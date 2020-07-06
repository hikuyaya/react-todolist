import React from 'react'

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleTodoItemClick = this.handleTodoItemClick.bind(this)
  }

  handleTodoItemClick() {
    this.props.delete(this.props.index)
  }

  render() {
    return (
      <div onClick={this.handleTodoItemClick}>
        {this.props.content}
      </div>
    )
  }

}

export default TodoItem;