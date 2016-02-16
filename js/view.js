
var View = (function () {
    function View () {
        this.template = '<tr><td class="name">'
        +'{{Name}}</td><td class="age">{{Age}}</td>'
        +'<td class="evalution">{{Evals}}</td></tr>';
        this.viev;
        this.table = ('.wrapper');
    }

    View.prototype.render = function (model) {
        var self = this;

        this.view = '<tr><th>Name</th><th>Age</th><th>Evalution</th></tr>';

        model.forEach(function (item) {
            self.view += self.template.replace("{{Name}}", item.name).replace("{{Age}}", item.age).replace("{{Evals}}", item.evalution);
        })
        $(this.table).html(this.view);
    };

    return View;
})();
