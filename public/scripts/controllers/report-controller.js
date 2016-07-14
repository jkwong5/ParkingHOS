(function(module) {

index.renderReportPage = function () {
    $('#leaderboard, #search, #results').hide();
    $('#leader').show();
    var blogSuccess = 'I am showing the Blog!';
    $('#blog').append('<h1>' + blogSuccess + '</h1>');
  };

});
