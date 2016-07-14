(function() {
  page('/', index.renderHomePage);
  // page('/report', report.renderReportPage);
  page('/search', index.renderSearchPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
