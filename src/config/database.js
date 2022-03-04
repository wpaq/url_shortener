const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.CONNECTIONSTRING, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });