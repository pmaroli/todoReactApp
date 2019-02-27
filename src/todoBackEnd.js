function Todo(db) {

	this.db = db;

	//Takes new todo task in the form of a string and adds it to the database
	this.newTodo = function (taskName) {

		//Add the todo to the database
		this.db.get('todos')
			.push({
				taskName: taskName,
				id: Math.random(),
				complete: false
			}).write();
		
	}
	
	//Returns the current todo list
	this.getTodo = function () {
		return this.db.get('todos').value()
	}
	
	//Sets the task {taskNumber} to 'Complete = true'
	this.toggleComplete = function (taskID, complete) {

		this.db.get('todos')
		.find({ id: taskID})
		.assign({ complete: !complete })
		.write();

	}
	
	//Removes task {taskNumber} from the todo list
	this.removeTodo = function (taskID) {	

		this.db.get('todos')
			.remove({ id: taskID })
			.write();

	}

	this.removeAll = function () {
		db.set('todos', []).write();
	}
	
}

module.exports.Todo = Todo;