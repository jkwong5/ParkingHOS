(function() {
  page('/', index.renderHomePage);
  page('/report', report.renderReportPage);
  // page('/search', search.renderSearchPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
