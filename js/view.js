/**
 * Created by IlyaLitvinov on 14.01.16.
 */
//globals observer app

var View = (function () {
    function View () {
        this.template = '<li data-id="{{id}}" class="{{completed}}">'
        + '<div class="view">'
        + '<label class="title">{{title}}</label>'
        + '</div>'
        + '</li>';
        this.input = $('.new-name', '.new-age', '.new-evalution');
        this.output = $('.student-list');
    }

    View.prototype.render = function (model) {
        var isActive = null;

        this.view = '';
        
        for(var key in model) {
            isActive = model[key] ? 'active': '';

            this.view = this.view + this.template.replace('id', key).replace('completed', key).replace('title', isActive);
        }
        $(this.output).html(this.view);
    };

    View.prototype.addChannels = function (callback) {
        $(this.input).on('keypress', function (e) {
            if(e.which === 13) {
                callback($(this).val());
            }
        });
    };

    return View;
})();
