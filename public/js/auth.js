
(function() {

  let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

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

$('#logout').on('click', function(e) {
  e.preventDefault();
});

//login a user
$('#loginForm').on('submit', function(e) {
  e.preventDefault();
  let loginEmail = $('#loginEmail').val();
  let loginPassword = $('#loginPassword').val();
  $.ajax ({
    type: 'POST',
    url: `${__API_URL__}/login`,
    data: JSON.stringify({
      'username': loginEmail,
      'password': loginPassword
    }),
    contentType:'application/json; charset=utf-8'
  })
.done(function(user){
console.log("successful login");
})
.fail(function(){
  console.log("fail");
});
});
})();
