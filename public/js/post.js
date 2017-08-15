
(function() {

  let __API_URL__ = process.env.LOCAL_URL || 'https://parking-hall-of-shame.herokuapp.com';

  let pic_url;
  let carMake;
  let carModel;
  let lic_plate;
  let lic_state;

//drop-down menu for list of US states
  $(document).ready(function() {
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states`
    }).done(function(stateNames) {
      $('#stateBar').append(stateNames);
      $('#searchState').append(stateNames);
    });
  });


  //car make dropdown menu
  $(document).ready(function() {
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carMakes) {
      $('#makeBar').append(carMakes);
      $('#makeSearch').append(carMakes);
    });
  });

  //populates the drop down for models
  $('#makeBar, #makeSearch').on('change', function(e) {
    let carMake = e.target.value;
    $('#modelBar, #modelSearch').empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/cars/${carMake}`
    }).done(function(carModels) {
      $('#modelBar, #modelSearch').append(carModels);
    });
  });

//updates the value of the carMake variable
  $('#makeBar').on('change', function() {
    carMake = $('#makeBar').val();
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
      cloud_name: 'dy7kdxxqe',
      upload_preset: 'devolunteer'
    },
    function(error, result) {
      if(error) {
        console.error(error);
      }
      pic_url = result[0].secure_url;
      return pic_url;
    });

//ajax post request, at the moment just sends cloudinary url which will be grabbed in a template
  $('#invaderSubmit').on('submit', function(e) {
    e.preventDefault();
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
      $('#lic_plate_input').val('');
      $('#makeBar').empty();
      $('#modalInputForm').modal('toggle');
    });
  });

})();
