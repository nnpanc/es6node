module.exports = {
	mongoUri: 'mongodb://localhost/es6node',
	sessionSecret: 'dev_secret_key',
	debug: true,
	facebook: {
		clientID: '163658790873147',
		clientSecret: 'a916295390bace3d34ac9952b2633f84',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback',
        profileFields: ['public_profile', 'emails']
	},
	google: {
		clientID: '705251080270-dguej6iq46hdeqj6pfmkdfkaoabq48k6.apps.googleusercontent.com',
		clientSecret: 'fqPwSRWne_qMqp7LLcTDc4LK',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
}