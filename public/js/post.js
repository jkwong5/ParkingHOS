
(function(module) {

  //nunjucks brought into front-end of application via CDN
  nunjucks.configure('static', {autoescape: true});


//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';
  let pic_url;
  let carMake;
  let carModel;
  let lic_plate;
  let lic_state;

//drop-down menu for list of US states
  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $('#stateBar').empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states`
    }).done(function(stateNames) {
      $('#stateBar').append((nunjucks.render('views/states.njk', {stateList: stateNames})));
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
      $('#makeBar').append((nunjucks.render('views/carmakes.njk', {makes: carNames})));
    });
  });

  //populates the drop down for models
  $('#makeBar').on('change', function() {
    let carMake = $('#makeBar').val();
    $('#modelBar').empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/cars/${carMake}`
    }).done(function(carModels) {
      carMake = $('#makeBar').val();
      $('#modelBar').append((nunjucks.render('views/carmodels.njk', {models: carModels})));
    });
  });

//updates value of carModel variable
  $('#modelBar').on('change', function() {
    carModel = $('#modelBar').val();
  });

//updates value of the license plate state
  $('#stateBar').on('change', function() {
    lic_state = $('#stateBar').val();
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
    lic_plate = $('#lic_plate_input').val();
    $.ajax ({
      type: 'POST',
      url: `${__API_URL__}/submit`,
      data: JSON.stringify({
        'img_url': pic_url,
        'lic_plate': lic_plate,
        'lic_state': lic_state,
        'make': carMake,
        'model': carModel}),
      contentType:'application/json; charset=utf-8',
      dataType:'json'
    }).done(function() {
      console.log('success');
      $('#modalInputForm').modal('toggle');
    });
  });

})(window);
