app.view = (function() {

	/* document.addEventListener("DOMContentLoaded", function(event) {
      app.controller.init();
  });*/

	function addCallBack() {
		var item = document.getElementById('item').value;
		app.controller.addItem(item);
	}


	function bindEvents() {
		var addTaskButton = document.getElementById('add')
		addTaskButton.addEventListener("click", addCallBack, false);
	}



	return {
		/*render: function(data) {
			document.getElementById('id').value = data.id;
			document.getElementById('name').value = data.name;
			document.getElementById('type').value = data.type;
			document.getElementById('value').value = data.value;
		},*/

		display: function(todo) {
			var list = document.getElementById('todo_items');
			var items = document.createElement("li");
			items.class = "list-group-item";
			var input = document.createElement("input");
			input.type = "checkbox";
			input.class ="checkbox";
			items.appendChild(input);
			items.appendChild(document.createTextNode(todo));

			list.appendChild(items);

		},

		bindEvents: bindEvents


	};

}());