//jquery ajax call here will hit the route that renders the home page

(function(module) {

  index = {};

  index.renderHomePage = function(ctx, next) {
    if ($('h1 p')) {
      $('h1 p').empty();
    }
    $('#search, #results, #post').hide();
    $('#blog').show();
    if (next) {
      next();
    }
  };

  module.index = index;

})(window);
