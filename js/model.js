
var Model = (function (){
    function Model() {
        this.students = [{
                name: 'Tom',
                age: 20,
                evalution: 5,
            },
            {
                name: 'Jim',
                age: 19,
                evalution: 4,
            },
            {
                name: 'Jane',
                age: 20,
                evalution: 5,
            },
        ]
    }
    
    Model.prototype.get = function () {
        return this.students;
    };


    return Model;
})();