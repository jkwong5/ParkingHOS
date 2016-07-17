(function(module) {

  var Cars = function(instance) {
    this.time = instance.time;
    this.img = instance.img;
    this.plate = instance.plate;
    this.state = instance.state;
    this.zip = instance.zip;
    this.make = instance.make;
    this.model = instance.model;
  };

  Cars.getData = function(ctx, next) {
    $.getJSON('../vendor/data/dummyData.json', function (data) {
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
