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
      });
    }
  };

  Filters.populateFilters = function(){
    var options,
      template = Handlebars.compile($('#option-template').html());

    options = Filters.make.reduce(function(a, b){
      if (a.indexOf(b.make) === -1){
        a.push(b.make);
      }
      return a;
    }, []);

    console.log(options);

    options.forEach(function(data){
      var optionTag = '<option value="' + data + '">' + data + '</option>';
      $('#makeFilter').append(optionTag);
    });
  };

  Filters.populateModel = function() {
    $('#makeFilter').on('change', function() {
      var modelArr = [];
      $('#modelFilter').siblings().remove();
      client.query('SELECT DISTINCT model FROM makeModel WHERE make = "' + $(this).val + '";',
      // .on('row', function(row));
      function(modelData) {
        modelData.map(function(a){
          modelArr.push(a.model);
        });
        modelArr.forEach(function(model){
          var modelOption = '<option value="' + model + '">' + model + '</option>';
          $('#modelFilter').append(modelOption);
        });
      });
    });
  };

  module.Filters = Filters;

})(window);
