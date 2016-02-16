
(function () {

    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
    var model = new Model();
    var view = new View();
    var controller = new Controller(model, view);
})();