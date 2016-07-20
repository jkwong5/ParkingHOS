(function(module) {

  var Post = {};

  Post.hideWidget = function() {
    $('#imageWidget').hide();
  };

  Post.submitInvader = function () {
    $('#submitBtn').on('click', function (e) {
      e.preventDefault();
      var lic_state = $('#stateField').val();
      var lic_plate = $('#plateField').val();
      var make = $('#makeField').val();
      var model = $('#modelField').val();
      window.location.assign("https://latfa.herokuapp.com/") //Jeff, you're up!
    });
  };
  module.Post = Post;

})(window);
