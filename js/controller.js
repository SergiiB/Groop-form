
var Controller = (function () {
    function Controller (model, view) {
        var self = this;
        this.view = view;
        this.model = model;

        this.view.render(this.model.get());
    }

    return Controller;
})();