
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
      $('#authSection').remove(); //forces authenticated section to re-render
      $('#authedNav').append(userHtml);
    }).fail(function() {
      alert('please insert valid email address');
    });
  });

//login a user with local authentication
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
  .done(function(userHtml){
    console.log(userHtml);
    $('#modalLRForm').modal('toggle');
    $('#authSection').remove();
    $('#authedNav').append(userHtml);

  })
  .fail(function(){
    alert('incorrect username or password');
    console.log('login unsuccessful');
  });
  });

  //log in a user with Google with Oauth2

  $('#loginGoogle').on('click', function() {
    $.ajax ({
      type: 'GET',
      url: `${__API_URL__}/auth/google`,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    })
    .done(function(user) {
      console.log(user);
    })
    .fail(function(err) {
      console.log(err);
    });
  });
})();
