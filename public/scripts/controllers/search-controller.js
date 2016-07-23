(function(module) {

  index.renderSearchPage = function (ctx, next) {
    if($('h1 p')) {
      $('h1 p').empty();
    }
    $('#blog, #results, #post').hide();
    $('#search').show();
    next();
  };

})(window);
