var path = require("path");

exports.hi = (req, res) => {
	console.log('Hi');
	res.send('Hi!');
}

exports.index = (req, res) => {
	res.sendFile((path.join(__dirname+'/../views/index.html')));
}

exports.home = (req, res) => {
	res.sendFile((path.join(__dirname+'/../views/home.html')));
}

