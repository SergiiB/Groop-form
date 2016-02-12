/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Model = (function (){
    function Model() {
        this.students = [{
                name: true,
                age: false,
                evalution: false,
            }
        ]
    }
    
    Model.prototype.get = function () {
        return this.students;
    };

    Model.prototype.setStudent = function (title) {
        for(var key in this.students) {
            this.students[key] = number;
        }

        this.students[title] = string;
    }

    return Model;
})();