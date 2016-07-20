(function(module) {

  index.renderSearchPage = function (ctx, next) {
    if($('h1 p')) {
      $('h1 p').empty();
    };
    $('#leaderboard, #blog, #results, #post').hide();
    $('#search').show();
    var searchSuccess = 'I am showing the the Search!';
    $('#search').append('<h1><p>' + searchSuccess + '</p></h1>');
    next();
  };

})(window);
