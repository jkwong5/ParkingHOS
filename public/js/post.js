
(function(module) {

  nunjucks.configure('static', {autoescape: true});


//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';
  let pic_url;

//drop-down menu for list of US states
  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $("#stateBar").empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states`
    }).done(function(stateNames) {
      $('#stateBar').append((nunjucks.render('views/states.njk', {stateList: stateNames})))
    });
  });


  //car make dropdown menu
  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $('#makeBar').empty();
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carNames) {
      $('#makeBar').append((nunjucks.render('views/carmakes.njk', {makes: carNames})))
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
