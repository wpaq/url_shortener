const routes = require('express').Router();

const HomeController = require('./controllers/HomeController');
const ShortenerController = require('./controllers/ShortenerController');

routes.get('/', HomeController.index);
routes.post('/shorten', ShortenerController.store);

module.exports = routes;