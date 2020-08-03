import React from 'react'

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            newItemText:""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.newItemText)
        this.props.createTodo(this.state.newItemText)
        this.setState({newItemText: ''})
    }

    handleChange = e => {
        this.setState({
            newItemText: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Add a To-do: &nbsp;
                        <input
                        value={this.state.newItemText}
                        name='add'
                        type='text'
                        placeholder='new task here'
                        onChange = {this.handleChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
                <p>TodoForm</p>
            </div>
        )
    }
}

export default TodoForm;