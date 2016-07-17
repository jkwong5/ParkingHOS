(function(module) {

  var Cars = function(instance) {
    this.dt = instance.time;
    this.lic_plate = instance.lic_plate;
    this.lic_state = instance.lic_state;
    this.make = instance.make;
    this.model = instance.model;
  };

  Cars.getData = function(ctx, next) {
    $.getJSON('/db/invaders', function (data) {
      data.forEach(function(car) {
        var cars = new Cars(car);
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
