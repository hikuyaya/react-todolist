import React from 'react';
import TodoItem from './TodoItem'

class Todolist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list: ['learn vue', 'learn react', 'learn English'],
      inputValue: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.hanndleInputChange = this.hanndleInputChange.bind(this)
    this.handleTodoItemClick = this.handleTodoItemClick.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  hanndleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleTodoItemClick(index) {
    /**
     * react中，最好不要用this.state这样的方式修改数据，而是创建
     * 一个副本通过修改副本的值再将副本赋值给原来的变量的方法进行操作
     */
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            key={index} 
            content={item} 
            index={index} 
            delete={this.handleTodoItemClick}
          />
        )
      })
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.hanndleInputChange}/>
          <button onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </React.Fragment>
    );
  }
}

export default Todolist;
