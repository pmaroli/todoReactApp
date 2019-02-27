import React, { Component } from 'react'

class AddForm extends Component {
    state = {
        taskName: ''
    }

    handleChange = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.taskName);
        this.setState({
            taskName: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="todoForm">
                    <input type="text" onChange={this.handleChange} value={this.state.taskName} name="task" id="task" autocomplete="off" placeholder="Enter a new task here..." />
                    <br />
                    <button type="submit" class="submit">ADD TO LIST</button>
                </form>
            </div>
        )
    }
}
    
export default AddForm