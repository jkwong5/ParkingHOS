//jQuery ajax call will hit the post back-end route

(function(module) {

  index.renderPostPage = function (ctx, next) {
    if($('h1 p')) {
      $('h1 p').empty();
    }
    $('#search, #results, #blog').hide();
    $('#post').show();
    next();
  };

  index.renderUploadButton = function (ctx, next) {
    if ($('.cloudinary-button')) {
      ($('.cloudinary-button')).remove();
    }
    $('#upload_widget_opener').cloudinary_upload_widget(
      {
        cloud_name: 'hyuowrnv9',
        upload_preset: 'nuykexvl',
        cropping: 'server', 'folder': 'user_photos',
      },
    function(error, result) { console.log(error, result);
      index.img = result['0'].secure_url;
    });
    next();
  };

})(window);
