(function(module) {

  index.renderPostPage = function (ctx, next) {
    if($('h1 p')) {
      $('h1 p').empty();
    }
    $('#leaderboard, #search, #results, #blog').hide();
    $('#post').show();
    var postSuccess = 'I want to shame a space Invader!';
    $('#post').append('<h1><p>' + postSuccess + '</p></h1>');
    next();
  };

  index.renderUploadButton = function (ctx, next) {
    if ($('.cloudinary-button')) {
      ($('.cloudinary-button')).remove();
    }
    $('#upload_widget_opener').cloudinary_upload_widget(
      {
        cloud_name: 'htc5w5cys',
        upload_preset: 'dx9pzwds',
        cropping: 'server', 'folder': 'user_photos',
        public_id: 'grouper_photo_pretty'
      },
    function(error, result) { console.log(error, result);
      console.log(result['0'].url);
      var img = result['0'].url;
    });
    next();
  };

})(window);
