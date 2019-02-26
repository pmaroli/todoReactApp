function Todo(db) {

	this.db = db;

	//Takes new todo task in the form of a string and adds it to the database
	this.newTodo = function (todo) {
		//Add the todo to the JSON file
		this.db.get('todos')
		.push({
			title: todo,
			complete: false
		}).write();
	}
	
	//Returns the current todo list
	this.getTodo = function () {
		const todos = this.db.get('todos').value();
		return todos;
	}
	
	//Sets the task {taskNumber} to 'Complete = true'
	this.completeTodo = function (taskNumber) {
		this.db.set(`todos[${taskNumber-1}].complete`, true).write();
	}
	
	//Removes task {taskNumber} from the todo list
	this.removeTodo = function (taskNumber) {
		//Get the Title Text of the task to be deleted
		var titleToDelete = this.db.get(`todos[${taskNumber-1}].title`).value();
		
		//Delete the task object from the array
		this.db.get('todos')
		.remove( {title: `${titleToDelete}`} )
		.write();
	}
	
}

module.exports.Todo = Todo;