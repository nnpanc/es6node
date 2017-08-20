import passport from 'passport';
var post = require('../controllers/post.controller');

module.exports = (app) => {
	var path = '/api/post';
	
	app.get('/post/all', post.getAll);
	// app.get('/post/id', post.getOne);
	app.get('/post/id/:id', post.getOne);
	app.get('/post/my_post', post.getMyPost);
	app.put('/post/create', post.create);
}