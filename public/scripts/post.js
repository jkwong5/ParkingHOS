(function(module) {

  var Post = {};

  Post.submitInvader = function() {
    $('#postForm').on('submit', function(e) {
      e.preventDefault();
      var ls = $('#stateField').val().toUpperCase();
      var lp = $('#plateField').val().toUpperCase();
      var ma = $('#makeField').val();
      var mo = $('#modelField').val();
      var im = index.img;
      window.location.assign('/postNew' + '?lp=' + lp + '&ls=' + ls + '&ma=' + ma + '&mo=' + mo + '&img=' + im);
    });
  };

  Post.getPicUrl = function () {
    $('.button.upload_cropped').on('submit', function (e) {
      console.log($('upload_widget_opener').cloud_name);
    });
  };

  module.Post = Post;
  Post.submitInvader();

})(window);
