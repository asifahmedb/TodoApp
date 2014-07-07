// addItem
// delete Item
//update Item
//get All
//get Item by Id

(function(){

window.todo = window.todo || {};

var _items =[];

  window.todo.Model = {
  	addItem : function(item){
     _items.push(item);
     window.todo.Controller.reload();
  	}

  }

})();