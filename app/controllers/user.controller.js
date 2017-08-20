var User = require('mongoose').model('User');
var path = require("path");

exports.getUsers = (req, res, next) => {
	User.find((err, user) => {
		if (err) {
			console.log('Failure');
			return next(err);
		}
		else {
			console.log('Success');
			res.json(user);
		}
	});

}

exports.create = (req, res, next) => {
	// console.log('BODY: ' + req.body);
	var user = new User(req.body);
	user.save((err) => {
		if (err) {
			console.log('Failure');
			return next(err);
		}
		else {
			console.log('Success');
			res.json(user);
		}
	});
}

exports.signup = (req, res) => {
	if (!req.user) {
		res.sendFile((path.join(__dirname+'/../views/signup.html')));
	}
	else {
		return res.redirect('/home');
	}
}

exports.login = (req, res) => {
	if (!req.user) {
		res.sendFile((path.join(__dirname+'/../views/login.html')));
	}
	else {
		return res.redirect('/home');
	}
}

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
}

exports.saveOAuthUserProfile = (req, profile, done) => {
	User.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, function(err, user) {
		if (err) return done(err);
		else {
			if (!user) {
				console.log(profile);
				var possibleUsername = profile.username
					|| (profile.email ? profile.email.split('@')[0] : '');
				console.log('NAME: ' + profile.username);
				User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
					profile.username = availableUsername;
					user = new User(profile);
					user.save((err) => {
						if (err) {
							// var message = getErrorMessage(err);
							// req.flash('error', message);
							return req.res.redirect('/login');
						}
						return done(err, user);
					})
				});
			}
			else {
				return done(err, user); 
			}
		}
	});
}

// curl -X POST -H "Content-Type: application/json" -d '{"firstName": "F", "lastName": "L", "username": "user", "email": "mail", "password": "pass"}' localhost:3000/user