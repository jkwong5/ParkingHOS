(function(module) {

  index = {};

  index.renderHomePage = function () {
    $('#leaderboard, #search, #results').hide();
    $('#blog').show();
    var blogSuccess = 'I am showing the Blog, which is also the home page!';
    $('#blog').append('<h1>' + blogSuccess + '</h1>');
  };

  module.index = index;

})(window);

// <section id="blog" class="tab-content">
//   <h3>Hall of Shame!</h3>
//   <select name="make" id="makeFilter" >
//     <option value="">-- Make --</option>
//   </select>
//   <select name="model" id="modelFilter">
//     <option value="">-- Model --</option>
//   </select><br>
//   <div id="blogData"></div>
// </section>
// <section id="leaderboard" class="tab-content">
//   <h3>Top Space Invaders Leaderboard!</h3>
//   <div id="leaderboardData"></div>
// </section>
// <section id="results" class="tab-content">
//   <h3>Search Results</h3>
//   <div id="plateResultsData"></div>
//   <div id="zipResultsData"></div>
// </section>
// <section id="search" class="tab-content">
