(function(module) {

  //nunjucks brought into front-end of application via CDN
  nunjucks.configure('static', {autoescape: true});


//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';

$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: `${__API_URL__}/invaders`
  }).done(function(invaders) {
    $('#invaderList').append((nunjucks.render('views/invaders.njk', {invaderList: invaders})));
  });
});



})(window);
