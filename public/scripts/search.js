(function(module){

  var Search = {};

  Search.all = [];

  Search.populateFilters = function() {
    $('#blogData article').each(function() {
      var val = $(this).find('.stateUrl').attr('value').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#searchState option[value="' + val + '"]').length === 0) {
        $('#searchState').append(optionTag);
      }
    });
  };

  Search.statePlate = function(){
    $('#searchBtn').on('submit', function(e){
      if ($('#searchState').val && $('#searchPlate').val){
        var state = $('#searchState').val;
        var plate = $('#searchPlate').val;
        $('#searchResults').hide();
        var result = $.grep(localStorage.invaders, function(n, index){
          console.log(state === localStorage.invaders.lic_state);
        });
        // $('#searchResults').find('li').val() === state;
        $('#searchResults').append(result);
      }
    // $('#blogData').find('li').val() === $('')

    });
  };

  module.Search = Search;

})(window);
