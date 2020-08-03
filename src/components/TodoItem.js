import React from 'react'

class TodoItems extends React.Component {


    render() {
        return (
            <div
                onClick={() => this.props.toggleItem(this.props.item.id)}
                className={`${this.props.item.completed ? "completed todo" : "todo"}`}
            >
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default TodoItems;