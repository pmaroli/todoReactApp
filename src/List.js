import React from 'react'

const List = ({todos, toggleComplete, removeTodo}) => {



    const listElements = todos.length ? (
        todos.map(todo => {

            if( todo.complete ) {
                var status = ' ✔' //Add a check mark to the end of the item to indicate it is complete
            }

            return (
                <li>
                    <a href='#' onClick={() => toggleComplete(todo.id, todo.complete)} id={todo.id}>{todo.taskName}{status}</a>
                    <span class="remove" onClick={() => {removeTodo(todo.id)}} id={todo.id}>X</span>
                </li>
            )
        })
    ) : null

    return(
        <div class="todolist">

            <h1>Your Current Tasks</h1>
            <p>CLICK A TASK TO TOGGLE ITS COMPLETE STATUS</p>

            <ol id="currentList">
                {listElements}
            </ol>

        </div>
    )
}

export default List