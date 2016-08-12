var express = require('express'),
models = require('../models'),
 router = express.Router(),
 loginController = require('./login-controller.js'),
 contentController = require('./addContent-controller.js'),
 adminController = require('./admin-controller.js'),
 userGeneratedPageControler = require('./userGeneratedPage-controller.js'),
 userIDController = require('./userID-controller.js');


loginController(router, models);
contentController(router, models);
adminController(router, models);
userGeneratedPageControler(router, models);

// router.get('/', function(req, res) {
//     res.redirect('/classify');
// });

router.get('/', function(req, res) {
	res.render('index');
})

console.log('Main router loaded.');

// router.get('/createDomain', function(req, res) {
// 	res.render('./partials/domSubmission');
// });

module.exports = router;