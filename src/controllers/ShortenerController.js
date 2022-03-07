const Shortener = require('../models/Shortener');

class ShortenerController {
    async store(req, res) {     
        if (req.body.baseUrl == '') {
            return res.redirect('/')
        }

        const domain = 'http://localhost:3000';
        const url_random = Math.random().toString(36).slice(-7);
        const newUrl = `${domain}/${url_random}`; 
        
        await Shortener.create({ baseUrl: req.body.baseUrl, newUrl: url_random});

        return res.redirect('/')
    }

    async find(req, res) {
        const shortUrl = await Shortener.findOne({ newUrl: req.params.shortUrl });

        if (shortUrl == null) return res.status(404);

        res.redirect(shortUrl.baseUrl);
    }
}

module.exports = new ShortenerController();