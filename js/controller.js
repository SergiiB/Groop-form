/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller (model, view) {
        var self = this;
        this.view = view;
        this.model = model;

        this.view.render(this.model.get());
        this.view.addChannels(function (title) {
            self.changeId(title);
        })
    }

    Controller.prototype.changeId = function (title) {
        this.model.setStudent(title);
        this.view.render(this.model.get());
    };

    return Controller;
})();