
exports.getIndex = (req, res, next) => {
  res.render('./index', {
    pageTitle: "Bootstrap EX",
    path:'/'
  })
}


exports.getLayouts = (req, res, next) => {
    res.render('./layouts', {
      pageTitle: 'layouts',
      path: '/layouts'
    });
  };
  

  exports.getContent = (req, res, next) => {
    res.render('./content', {
      pageTitle: 'Content',
      path: '/content'
    });
  };

  exports.getForms = (req, res, next) => {
    res.render('./forms', {
      pageTitle: 'Forms',
      path: '/form'
    });
  };


  exports.getComponents = (req, res, next) => {
    res.render('./components', {
      pageTitle: 'Components',
      path: '/comp'
    });
  };