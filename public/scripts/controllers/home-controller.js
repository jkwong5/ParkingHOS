(function(module) {

  index = {};

  index.renderHomePage = function () {
    $('#leaderboard, #search, #results, #post').hide();
    $('#blog').show();
    var blogSuccess = 'I am showing the Blog, which is also the home page!';
    $('#blog').append('<h1>' + blogSuccess + '</h1>')
  };

  module.index = index;

})(window);
