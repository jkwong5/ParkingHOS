(function(module) {

  index.renderSearchPage = function () {
    $('#leaderboard, #blog, #results').hide();
    $('#search').show();
    var blogSuccess = 'I am showing the the Search!';
    $('#search').append('<h1>' + blogSuccess + '</h1>');
  };

})(window);
