const CreateShortenerService = require('../services/CreateShortenerService');

class ShortenerController {
    async store(req, res) {
        const { long_url } = req.body;

        const url = CreateShortenerService.shortener();

        return res.json({
            newUrl: `${long_url}/${url}`
        })
    }
}

module.exports = new ShortenerController();