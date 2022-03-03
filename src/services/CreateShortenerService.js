class CreateShortenerService {
    shortener() {
        const domain = 'http://localhost:3000'
        const url_random = Math.random().toString(36).slice(-7);
        const newUrl = `${domain}/${url_random}`;

        return newUrl;        
    }

}

module.exports = new CreateShortenerService();