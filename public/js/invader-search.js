
(function() {

  // let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  let __API_URL__ = 'http://localhost:3000';

  let carMake;
  let carModel;
  let lic_state;

//updates the value of the carMake variable
  $('#makeSearch').on('change', function() {
    carMake = $('#makeSearch').val();
  });
//updates value of carModel variable
  $('#modelSearch').on('change', function() {
    carModel = $('#modelSearch').val();
  });

//updates value of the license plate state
  $('#searchState').on('change', function() {
    lic_state = $('#searchState').val();
  });

  //search by license plate
  $('#searchPlateBtn').on('click', function() {
    let lic_plate_val = $('#lic_plate_search').val().toUpperCase();
    $.ajax ({
      type: 'GET',
      url: `${__API_URL__}/search/license/${lic_plate_val}`
    }).done(function(invaders) {
      $('#modalRRForm').modal('toggle');
      $('#invaderList').empty();
      $('#invaderList').append(invaders);
    }).fail(function() {
      alert('Invader Not Found');
    });
  });

  //search by state
  $('#searchStateBtn').on('click', function() {
    $.ajax ({
      type: 'GET',
      url: `${__API_URL__}/search/state/${lic_state}`
    }).done(function(invaders) {
      $('#modalRRForm').modal('toggle');
      $('#invaderList').empty();
      $('#invaderList').append(invaders);
    }).fail(function() {
      alert('Invader Not Found');
    });
  });

  //search by Make and Model
  $('#searchModelBtn').on('click', function() {
    $.ajax ({
      type: 'GET',
      url: `${__API_URL__}/search/${carMake}/${carModel}`
    }).done(function(invaders) {
      $('#modalRRForm').modal('toggle');
      $('#invaderList').empty();
      $('#invaderList').append(invaders);
    }).fail(function() {
      alert('Invader Not Found');
    });
  });
})();
