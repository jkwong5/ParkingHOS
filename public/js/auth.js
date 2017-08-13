
(function() {

  //let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  let __API_URL__ = 'http://localhost:3000';

   //register a user
  $('#userRegistration').on('submit', function(e) {
    e.preventDefault();
    console.log($('#regEmail').val());
    if ($('#regPassword').val() ==! $('#regPasswordRepeat').val()) {
      alert('passwords must match');
      return;
    }
    $.ajax ({
      type: 'POST',
      url: `${__API_URL__}/signup`,
      data: JSON.stringify({
        'username': $('#regEmail').val(),
        'password': $('#regPassword').val()
      }),
      contentType:'application/json; charset=utf-8',
      dataType:'json'
    }).done(function(user) {
      $('#regEmail').val('');
      $('#regPassword').val('');
      $('#regPasswordRepeat').val('');
      $('#modalLRForm').modal('toggle');
      console.log(`${user.username} has been created`);
    }).fail(function() {
      alert('please enter valid email address');
    });
  });
})();
