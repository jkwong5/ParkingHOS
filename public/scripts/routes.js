(function() {
  page('/', index.renderHomePage);
  page('/post', index.renderPostPage);
  page('/search', index.renderSearchPage);
  page('/leaderboard', index.renderLeaderPage);  
  page('*', function() {
    console.log('not found');
  });
  page();
})();
