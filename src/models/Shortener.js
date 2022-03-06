const mongoose = require('mongoose');

const ShortenerSchema = new mongoose.Schema({
    baseUrl: { type: String, required: true },
    newUrl: { type: String, required: true },
});

module.exports = mongoose.model('Shortener', ShortenerSchema);