(function() {
  page('/', index.renderHomePage);
  page('/post', index.renderPostPage);
  page('/search', index.renderSearchPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
