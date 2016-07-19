(function(module){

  var Filters = function(instance){
    this.make = instance.make;
    this.model = instance.model;
  };

  Filters.all = [];
  Filters.make = [];

  Filters.loadAll = function(data){
    data.forEach(function(ele){
      Filters.all.push(new Filters(ele));
    });
  };

  Filters.getData = function(ctx, next){
    if (localStorage.makeModel){
      Filters.loadAll(JSON.parse(localStorage.makeModel));
    } else {
      $.getJSON('/db/makeModel', function(data){
        data.forEach(function(instance){
          Filters.make.push(instance);
        });
      }).done(function(){
        Filters.populateFilters();
        Filters.populateModel();
      });
    }
  };

  Filters.populateFilters = function(){
    $('#makeFilter').children().remove();
    var options,
      template = Handlebars.compile($('#option-template').html());

    options = Filters.make.reduce(function(a, b){
      if (a.indexOf(b.make) === -1){
        a.push(b.make);
      }
      return a;
    }, []);

    var makeText = '<option> --Make-- </option>';
    $('#makeFilter').append(makeText);
    var modelText = '<option> --Model-- </option>';
    $('#modelFilter').append(modelText);
    options.forEach(function(data){
      var optionTag = '<option value="' + data + '"id = "' + data + '">' + data + '</option>';
      $('#makeFilter').append(optionTag);
      $('#makeField').append(optionTag);
    });
  };

  Filters.populateModel = function() {
    $('#makeFilter').on('change', function(e) {
      modelArr = [];
      $('#modelFilter').children().remove();
      Filters.make.forEach(function(instance, i) {
        if (e.target.value === Filters.make[i].make) {
          modelArr.push(Filters.make[i].model);
        }
      });
      modelArr.forEach(function(model){
        var modelOption = '<option value="' + model + '">' + model + '</option>';
        $('#modelFilter').append(modelOption);
      });
    });
  };

  Filters.populatePostModel = function() {
    $('#makeField').on('change', function(e) {
      modelArr = [];
      $('#modelField').children().remove();
      Filters.make.forEach(function(instance, i) {
        if (e.target.value === Filters.make[i].make) {
          modelArr.push(Filters.make[i].model);
        }
      });
      modelArr.forEach(function(model){
        var modelOption = '<option value="' + model + '">' + model + '</option>';
        $('#modelField').append(modelOption);
      });
    });
  };

  Filters.getData();

  module.Filters = Filters;

})(window);
