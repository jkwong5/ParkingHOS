(function(module) {

  var Post = {};

  Post.hideWidget = function() {
    $('#imageWidget').hide();
  };

  Post.submitInvader = function() {
    $('#submitBtn').on('click', function(e) {
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
  module.Post = Post;
  Post.submitInvader();

})(window);
