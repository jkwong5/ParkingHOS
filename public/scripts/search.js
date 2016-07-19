(function(module){

var Search = function(instance){
  this.state = $('#searchState').value;
  this.plate = $('#searchPlate').value;
  this.zip = $('#searchZip').value;
};

Search.all = [];

Search.form = function(){
  $('#searchForm').on('submit', function(e) {
    e.preventDefault();
  }

Search.state = function(){
  $('#searchBtn').on('submit', function(){
    if ($('#searchState').val && $('#searchPlate')){
      $('#searchResults').hide();
      $('#blogData').find('li').value() === state;
      $('#searchResults').append(template())
  }
  $('#blogData').find('li').value() === $('')

})


})(window);
