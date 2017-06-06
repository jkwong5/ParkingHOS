(function(module) {

  //nunjucks brought into front-end of application via CDN
  nunjucks.configure('static', {autoescape: true});


//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';
  let searchField = $('#search').val();
  let expression = new RegExp(searchField, "i");

$(document).ready(function() {
  $('#search').keyup(function() {
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/invaders`
    }).done(function(invaders) {
      $.each(data, function(key, value){
        if(value.lic_plate.search(expression) != -1 || value.carMake.search(expression) != -1 || value.carModel.search(expression) != -1){
          $('#invaderList').append((nunjucks.render('views/invaders.njk', { lic_plate: +value.lic_plate+ })
        ));
        }
      })
    });
  });
});


})(window);
