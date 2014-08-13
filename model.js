/*(function(app) {
	
	app.Model = {
		order: {
			id: 123,
			name: "aconex",
			type: "Construction",
			value: "acx"
		}
	}

})(app = window.app || {});*/

app.model = (function() {
	var _todos = [];
	var _data = {
		id: 123,
		name: "aconex",
		type: "Construction",
		value: "acx"
	};


	var addItem = function(item) {
		if (item === "") {
			alert('Item Cannot be empty');
			return;
		}
		_todos.push(item);
		console.log("Items : " + _todos);
		app.controller.display(item);
	};

	var deleteItem = function(item) {
		console.log("delete Item");
	};

	var updateItem = function(item) {
		console.log("update Item");
	};

	var getTodos = function getTodos() {
		return _todos;
	};

	return {
		data: _data,
		addItem: addItem,
		deleteItem: deleteItem,
		updateItem: updateItem,
		listTodo: getTodos
	};

})();