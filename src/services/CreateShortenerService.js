class CreateShortenerService {
    shortener() {
        return Math.random().toString(36).slice(-7);
    }

}

module.exports = new CreateShortenerService();