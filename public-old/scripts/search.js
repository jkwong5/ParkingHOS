(function(module) {

  var Search = {};

  Search.all = [];

  Search.populateFilters = function(ctx, next) {
    $('#blogData article').each(function() {
      var val = $(this).find('.stateUrl').attr('value').toUpperCase();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#searchState option[value="' + val + '"]').length === 0) {
        $('#searchState').append(optionTag);
      }
    });
  };

  Search.statePlate = function() {
    $('#searchBtn').on('click', function(e) {
      e.preventDefault();
      var resultsArr = [];
      if ($('#searchState').val() && $('#searchPlate').val()) {
        var state = $('#searchState').val().toUpperCase();
        var plate = $('#searchPlate').val().toUpperCase();
        $('#searchResults').empty();
        Cars.all.forEach(function(instance, i) {
          if (state === Cars.all[i].lic_state && plate === Cars.all[i].lic_plate) {
            if (Cars.all[i].img_url === 'undefined') {
              var noImgText = 'There is no image of this asshole';
              resultsArr.push('<h2>' + noImgText + '</h2>');
            } else {
              resultsArr.push('<img src = "' + Cars.all[i].img_url + '">' + '<br>');
            }
          }
        });
        if (resultsArr.length) {
          resultsArr.forEach(function(instance) {
            $('#searchResults').append(instance);
          });
        } else {
          $('#searchResults').append('<h2>No assholes to see here</h2>');
        }
      }
    });
  };

  Search.clearSearch = function(ctx, next) {
    $('#searchResults').empty();
    next();
  };

  module.Search = Search;

})(window);
