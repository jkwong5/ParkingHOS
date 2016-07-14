(function() {
  page('/', index.renderHomePage);
<<<<<<< HEAD
  page('/report', report.renderReportPage);
  page('/search', search.renderSearchPage);
=======
  page('/post', index.renderPostPage);
  page('/search', index.renderSearchPage);
>>>>>>> origin/dev
  page('*', function() {
    console.log('not found');
  });
  page();
})();
