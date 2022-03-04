const CreateShortenerService = require('../services/CreateShortenerService');
const Shortener = require('../models/Shortener');

class ShortenerController {
    async store(req, res) {
        const { long_url } = req.body;
        const url = new Shortener(req.body);
        
        const shorten_link = await Shortener.createLink();

        const newUrl = CreateShortenerService.shortener();

        return res.json({
            newUrl: shorten_link
        })
    }
}

module.exports = new ShortenerController();