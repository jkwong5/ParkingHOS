(function(module) {

index.renderPostPage = function () {
    $('#leaderboard, #search, #results, #blog').hide();
    $('#post').show();
    var postSuccess = 'I want to shame a space Invader!';
    $('#post').append('<h1>' + postSuccess + '</h1>')
  };

})(window);
