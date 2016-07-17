(function() {
  page('/', index.renderHomePage, Cars.getData);
  page('/post', index.renderPostPage, index.renderUploadButton);
  page('/search', index.renderSearchPage);
  page('/leaderboard', index.renderLeaderPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
