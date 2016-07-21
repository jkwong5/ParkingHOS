(function(module) {

  var Cars = function(instance) {
    this.dt = instance.time;
    this.img_url = instance.img_url;
    this.lic_plate = instance.lic_plate;
    this.lic_state = instance.lic_state;
    this.make = instance.make;
    this.model = instance.model;
  };

  Cars.all = [];

  Cars.loadAll = function(data) {
    Cars.all = [];
    data.forEach(function(ele) {
      Cars.all.push(new Cars(ele));
    });
  };

  Cars.getData = function(ctx, next) {
    localStorage.removeItem('invaders');
    $.getJSON('/db/invaders', function (data) {
      data.forEach(function(car) {
        var cars = new Cars(car);
        var stringData = JSON.stringify(data);
        localStorage.setItem('invaders', stringData);
        Cars.loadAll(JSON.parse(localStorage.invaders));
        Cars.appendToBlog(Cars.all);
      });
    }).done(function(data) {
      Cars.appendToBlog(data);
    });
  };

  Cars.appendToBlog = function(data) {
    $('#blogData').empty();
    data.forEach(function(instance) {
      var source = $('#blog-template').html();  //template script grabbed
      var template = Handlebars.compile(source);
      $('#blogData').append(template(instance));
    });
  };


  module.Cars = Cars;

})(window);
