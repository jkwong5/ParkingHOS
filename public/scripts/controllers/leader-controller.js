(function(module) {

  index.renderLeaderPage = function () {
    if($('h1 p')) {
      $('h1 p').empty();
    }
    $('#post, #search, #results, #blog').hide();
    $('#leaderboard').show();
    var leaderSuccess = 'Welcome to the leaderboard!';
    $('#leaderboard').append('<h1><p>' + leaderSuccess + '</p></h1>');
  };

})(window);
