
(function(module) {

  // let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  let __API_URL__ = 'http://localhost:3000';

  let pic_url;
  let carMake;
  let carModel;
  let lic_plate;
  let lic_state;

//drop-down menu for list of US states
  $('#search').on('click', function(e) {
    e.preventDefault();
    $('#stateSearch').empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states`
    }).done(function(stateNames) {
      $('#stateSearch').append(stateNames);
    });
  });


  //car make dropdown menu
  $('#panel11').on('click', function() {
    e.preventDefault();
    $('#makeSearch').empty();
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carMakes) {
      $('#makeSearch').append(carMakes);
    });
  });

  //populates the drop down for models
  $('#makeSearch').on('change', function() {
    let carMake = $('#makeSearch').val();
    $('#modelSearch').empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/cars/${carMake}`
    }).done(function(carModels) {
      $('#modelSearch').append(carModels);
    });
  });

//updates the value of the carMake variable
  $('#makeSearch').on('change', function() {
    carMake = $('#makeSearch').val();
  });
//updates value of carModel variable
  $('#modelSearch').on('change', function() {
    carModel = $('#modelSearch').val();
  });

//updates value of the license plate state
  $('#stateSearch').on('change', function() {
    lic_state = $('#stateSearch').val();
  });

//ajax post request, at the moment just sends cloudinary url which will be grabbed in a template
  $('#searchStateBtn').on('submit', function(e) {
    e.preventDefault();
    lic_plate = $('#lic_plate_search').val();
    $.ajax ({
      type: 'GET',
      url: `${__API_URL__}/search`,
      data: JSON.stringify({
        'lic_plate': lic_plate,
        'lic_state': lic_state,
        'make': carMake,
        'model': carModel}),
      contentType:'application/json; charset=utf-8',
      dataType:'json'
    }).done(function() {
      console.log('success');
      $('#lic_plate_search').val('');
      $('#makeBar').empty();
      $('#modalInputForm').modal('toggle');
    });
  });

})(window);
