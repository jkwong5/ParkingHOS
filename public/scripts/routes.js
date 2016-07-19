(function() {
  page('/', Filters.removeStuff, index.renderHomePage, Cars.getData, Filters.getData);
  page('/post', Filters.removeStuff, index.renderPostPage, index.renderUploadButton, Filters.populatePostModel);
  page('/search', Filters.removeStuff, index.renderSearchPage);
  page('/leaderboard', Filters.removeStuff, index.renderLeaderPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
