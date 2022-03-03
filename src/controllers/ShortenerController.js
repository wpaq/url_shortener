const CreateShortenerService = require('../services/CreateShortenerService');

class ShortenerController {
    async store(req, res) {
        const { long_url } = req.body;

        const newUrl = CreateShortenerService.shortener();

        return res.json({
            newUrl: newUrl
        })
    }
}

module.exports = new ShortenerController();