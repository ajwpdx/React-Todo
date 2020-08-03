// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import TodoItems from './TodoItems'

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                {this.props.todos.map(item => (
                    <TodoItems key={item.id} item={item}/>
                ))}
                
            </div>

        )
    }
}

export default TodoList;