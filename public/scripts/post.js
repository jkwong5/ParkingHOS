(function(module) {

  var Post = {};

  Post.submitInvader = function() {
    $('#postForm').on('submit', function(e) {
      e.preventDefault();
      var ls = $('#stateField').val();
      console.log(ls);
      var lp = $('#plateField').val();
      console.log(lp);
      var ma = $('#makeField').val();
      console.log(ma);
      var mo = $('#modelField').val();
      console.log(mo);
      window.location.assign('/postNew' + '?lp=' + lp + '&ls=' + ls + '&ma=' + ma + '&mo=' + mo);
      $('#imageWidget').show();
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
