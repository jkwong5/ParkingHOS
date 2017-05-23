
(function(module) {

//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';
  let pic_url;
  let carMakes;

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
    e.preventDefault();
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carNames) {
      console.log(carNames);
      carMakes = carNames;
      return carMakes;
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
      if(error) {
        console.error(error);
      }
      pic_url = result[0].secure_url;
      return pic_url;
    });

//ajax post request, at the moment just sends cloudinary url which will be grabbed in a template
$('#invaderPost').on('click', function() {
  $.ajax ({
    type: 'POST',
    url: `${__API_URL__}/submit`,
    data: JSON.stringify({"img_url": pic_url}),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
  }).done(function() {
    console.log('success');
  });
});


  // TODO: Make it so model data can populate on the front-end based off what is selected in the make




})(window);
