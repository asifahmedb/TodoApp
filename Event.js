/*var event = (function(sender) {
     _sender : sender;
     _listeners : [];

    var attach = function (listener) {
        this._listeners.push(listener);
    },
    notify = function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }

    return {
        attach: attach,
        notify: notify
    };

})();
*/
