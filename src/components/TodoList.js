// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <h2>Todo List (0/{this.props.todos.length} complete)</h2>
                <div className='todo-items'>

                
                {this.props.todos.map(item => (
                    <TodoItem 
                    toggleItem = {this.props.toggleItem}
                    key={item.id} 
                    item={item}/>
                ))}
                </div>
            </div>

        )
    }
}

export default TodoList;