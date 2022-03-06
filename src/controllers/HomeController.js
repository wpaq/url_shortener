const Shortener = require('../models/Shortener');

class HomeController {
    async index(req, res) {
        const newUrl = await Shortener.find();

        return res.render('index', { newUrl });
    }
}

module.exports = new HomeController();