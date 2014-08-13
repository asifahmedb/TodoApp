
var app = {};


/*app.model = {
	data: {
		id: 123,
		name: "aconex",
		type: "Construction",
		value: "acx"
	},
	init: function() {
		console.log(this.Order.id);
	}

};*/


/*app.view = (function() {

	return {
		render: function(data) {
			document.getElementById('id').value = data.id;
			document.getElementById('name').value = data.name;
			document.getElementById('type').value = data.type;
			document.getElementById('value').value = data.value;


		}
	};

}());*/


/*app.controller = (function(model, view) {

	// local function which doesnt need to be expose
	var init = function() {
			console.log(model);
			view.render(model.data);
		}
		init();

	return {
		
		addItem : function() {
			console.log("Hello");
			model.addItem();
		},

		display: function() {
			console.log(model);
			view.render(model.data);
		},

		viewAll: function() {
			view.listTodo(model.getTodos());
		}


	};



}(app.model, app.view));*/