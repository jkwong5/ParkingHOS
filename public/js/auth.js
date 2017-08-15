
(function() {

  //let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  let __API_URL__ = 'http://localhost:3000';

   //register a user
  $('#userRegistration').on('submit', function(e) {
    e.preventDefault();
    let firstPass = $('#regPassword').val();
    let repeatPass = $('#regPasswordRepeat').val();
    if (firstPass !== repeatPass) {
      alert('passwords must match');
      return;
    }
    $.ajax ({
      type: 'POST',
      url: `${__API_URL__}/signup`,
      data: JSON.stringify({
        'username': $('#regEmail').val(),
        'password': firstPass
      }),
      contentType:'application/json; charset=utf-8'
    }).done(function(userHtml) {
      $('#regEmail').val('');
      $('#regPassword').val('');
      $('#regPasswordRepeat').val('');
      $('#modalLRForm').modal('toggle');
      $('#authedNav').append(userHtml);
      $('#unauthedNav').hide()
    }).fail(function() {
      alert('please insert valid email address');
    });
  });
})();
