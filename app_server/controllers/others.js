/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    content: 'Loc8r is the application you will build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'Loc8r is the application you will build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'Loc8r is the application you will build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }

  module.exports.menu = function(req, res)  {
    res.render('menu', {title: 'MENU'});
};
module.exports.addReview = function(req, res) {
    res.render('cake-review-form', {title: 'Review Starbucks'});
};
