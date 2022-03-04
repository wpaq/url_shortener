const mongoose = require('mongoose');

const ShortenerSchema = new mongoose.Schema({
    baseUrl: { type: String, required: true },
    newUrl: { type: String, required: true },
});

const ShortenerModel = mongoose.model('Shortener', ShortenerSchema);

function Shortener(body) {
    this.body = body;
}

Shortener.createLink = async function() {
    const urlLink = await ShortenerModel.create(this.body);
    return urlLink;
};


module.exports = Shortener;