import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

module.exports = function() {
	const app = express();

	//check environment if 'development' use morgan to collect debug log
	console.log(process.env.NODE_ENV);
	if (process.env.NODE_ENV === "development") {
		app.use(morgan('dev'));
	}
	//else 'production' use compression to compress response
	else {
		// do something
	}

	//use bodyParser to parsing request body
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());


	var config = require('./config');
	app.use(session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitializeed: true
	}));
	app.use(passport.initialize()); //start passport
	app.use(passport.session()); //use session via express-session

	//set routing by send app parameter to _.route.js
	require('../app/routes/index.route')(app);
	require('../app/routes/user.route')(app);
	require('../app/routes/post.route')(app);

	return app;
}