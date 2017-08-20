import index from '../controllers/index.controller';
const path = '/api/index';

module.exports = (app) => {
	app.get('/', index.index);
	app.get(path + '/hi', index.hi);
	app.get('/home', index.home);	
};