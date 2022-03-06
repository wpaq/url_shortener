const dotenv = require('dotenv').config();

const express = require('express');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes(); 
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));

        this.express.set('view engine', 'ejs');
        this.express.set('views', './src/views');
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;