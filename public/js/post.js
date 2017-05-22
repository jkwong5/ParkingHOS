//my thinking is that this is where we will put Invader post JS logic
//use jQuery to interact with the DOM here. grab a certain button

(function(module) {

  let __API_URL__ = 'http://localhost:3000';

  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states` //puts the list of states in the front end
    }).done(function(stateNames) {
      if(!localStorage.usStates) {
        localStorage.setItem('usStates', stateNames);
      }
      //console.log(stateNames);
      return stateNames
    });
  });

  //$('#')





})(window);
