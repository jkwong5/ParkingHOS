
(function(module) {

//hard-coding it here but that will change upon deployment
  let __API_URL__ = 'http://localhost:3000';

  //This is one way to populate the drop-down, but it's bad practice. Let's not do this.
  $('#postButton').on('click', function(e) {
    e.preventDefault();
    $("#stateBar").empty();
    $.ajax({
      method: 'GET',
      url: `${__API_URL__}/states` //puts the list of states in the front end
    }).done(function(stateNames) {
      $.each(stateNames, function(index) {
        $("#stateBar").append("<option value =' " + index + " '>" + stateNames[index] + "</option>");
      });
    });
  });

  //keep the logic that makes the db call, but put it into template. Not sure how.
  $('#makeBar').on('click', function(e) {
    e.preventDefault()
    $.ajax ({
      method: 'GET',
      url: `${__API_URL__}/cars`
    }).done(function(carNames) {
      console.log(carNames);
    });
  });

  // TODO: Make it so model data can populate on the front-end based off what is selected in the make




})(window);
