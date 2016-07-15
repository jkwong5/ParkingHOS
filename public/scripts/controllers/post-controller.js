(function(module) {

  index.renderPostPage = function () {
    if($('h1 p')) {
      $('h1 p').empty();
    }
    $('#leaderboard, #search, #results, #blog').hide();
    $('#post').show();
    var postSuccess = 'I want to shame a space Invader!';
    $('#post').append('<h1><p>' + postSuccess + '</p></h1>');
  };

})(window);
