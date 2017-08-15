(function() {

  let __API_URL__ = 'https://parking-hall-of-shame.herokuapp.com';

  //when the page is ready, add in the invaders
  $(document).ready(function() {
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/invaders`
    }).done(function(invaders) {
      $('#invaderList').append(invaders);

      //add shaming event listener onto each "shame" button on all the invaders
      $('button.btn.btn-primary').on('click', function(e) {
        let invaderId = e.target.getAttribute('data-jacob');
        $.ajax({
          method: 'POST',
          url: `${__API_URL__}/shame/${invaderId}`
        })//mimics the number of shamings in the front-end. Back end allows for persitence
        .done(function(shamings) {
          e.target.nextSibling.nextSibling.innerHTML = '';
          var newShameTotal = document.createElement('h2');
          newShameTotal.innerHTML = shamings;
          e.target.nextSibling.nextSibling.appendChild(newShameTotal);
        });
      });
    });
  });




})();
