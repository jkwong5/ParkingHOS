(function(module) {

  index.renderSearchPage = function () {
    $('#leaderboard, #blog, #results, #post').hide();
    $('#search').show();
    var searchSuccess = 'I am showing the the Search!';
    $('#search').append('<h1>' + searchSuccess + '</h1>')
  };

})(window);
