
(function(module) {

//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';

  //populates state dropdown menu via bad practices
  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $("#stateBar").empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states` //puts the list of states in the front end
    }).done(function(stateNames) {
      $.each(stateNames, function(index) {
        $("#stateBar").append("<option value =' " + index + " '>" + stateNames[index] + "</option>");
      });
    });
  });

  //car make dropdown menu
  $('#makeBar').on('click', function(e) {
    e.preventDefault()
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carNames) {
      console.log(carNames);
    });
  });

  //upload widget for post modal
  $('#upload_widget_opener').cloudinary_upload_widget(
    {
      cloud_name: 'hyuowrnv9',
      upload_preset: 'nuykexvl',
      cropping: 'server', 'folder': 'user_photos'
    },
    function(error, result) {
      console.log(error, result);
    });



  // TODO: Make it so model data can populate on the front-end based off what is selected in the make




})(window);
