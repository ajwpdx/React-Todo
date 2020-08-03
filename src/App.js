import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  createTodo = (newTodoName) => {
    const newTodo = {
      task: newTodoName,
      id: new Date(),
      completed: false
    }
    console.log(newTodo)
    this.setState({
      todos: [ ...this.state.todos, newTodo]
    })

  }

  clearList = () => {
    this.setState({
      todos: this.state.todos.filter()
    })
  }

  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          console.log(item.id)
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  render() {
    return (
      <div className='App'>
        
        <TodoForm
        createTodo={this.createTodo}
        clearList={this.clearList}
        />
        <TodoList 
        todos={this.state.todos}
        toggleItem = {this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
