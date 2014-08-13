app.controller = (function(model, view) {

	// local function which doesnt need to be expose
	/*var init = function() {
			console.log(model);
			view.render(model.data);
		}
		init();
*/
	return {
		
		addItem : function(item) {
			console.log("Hello");
			model.addItem(item);
		},

		/*display: function() {
			console.log(model);
			view.render(model.data);
		},
*/
		display: function(item) {
			view.display(item);
		},

		init :function(){
			view.bindEvents();
		}


	};



}(app.model, app.view));
