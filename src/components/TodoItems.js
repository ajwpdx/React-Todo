import React from 'react'

class TodoItems extends React.Component {


    render() {
        return (
            <div>
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default TodoItems;