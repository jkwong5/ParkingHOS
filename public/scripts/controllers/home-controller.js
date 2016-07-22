(function(module) {

  index = {};

  index.renderHomePage = function(ctx, next) {
    if ($('h1 p')) {
      $('h1 p').empty();
    }
    $('#leaderboard, #search, #results, #post').hide();
    $('#blog').show();
    var blogSuccess = 'I am showing the Blog, which is also the home page!';
    $('#blog').append('<h1><p>' + blogSuccess + '</p></h1>');
  };

  module.index = index;

})(window);
