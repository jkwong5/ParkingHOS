(function(module) {

//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';

  $(document).ready(function() {
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/invaders`
    }).done(function(invaders) {
      $('#invaderList').append(invaders);
      $('button.btn.btn-primary').on('click', function(e) {
        let invaderId = e.target.getAttribute('data-jacob');
        $.ajax({
          method: 'POST',
          url: `${__API_URL__}/shame/${invaderId}`
        }).done(function(invader) {
          $('#countStats').empty();
          $('#countStats').append(invader.shame);
        });
      });
    });
  });




})(window);
