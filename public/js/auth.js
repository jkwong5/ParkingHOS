(function() {

  let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  //let __API_URL__ = 'http://localhost:3000';


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



  var forgotPasswordClickEvt = document.getElementById('forgotPW');
  forgotPasswordClickEvt.addEventListener('click', forgotPasswordClicked);
  function forgotPasswordClicked(event) {
      event.preventDefault();
      var data = "email=" + document.getElementById('email').value;
      ajaxCall(data, "http://localhost:3000/forgot_password", function(status, response) {
          if (status == 200) {
              alert('successfully sent');
          } else {
              alert('Error', status)
          }
      });
  }
  function ajaxCall(data, url, callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", url, true);
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
              return callback(this.status, JSON.parse(xhttp.response));
          }
      }
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(data);
  }

  $('#resetPW').on('click', function(e) {
    e.preventDefault();
    var token = document.location.href.split('token=')[1];
    var data = "newPassword=" + document.getElementById('newPassword').value + '&verifyPassword=' + document.getElementById('verifyPassword').value + '&token=' + token;
    $.ajax({
      url: `${__API_URL__}/reset_password`,
      method: 'GET'
    })
    .done(function(){
      alert('successfully sent');
    })
    .fail(function(){
      alert('Error', status)
    });
    function ajaxCall(data, url, callback){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                return callback(this.status, JSON.parse(xhttp.response));
            }
        };
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
  });

});
