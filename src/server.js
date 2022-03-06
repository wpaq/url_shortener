const app = require('./app');

const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.CONNECTIONSTRING, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

app.listen(process.env.PORT || 3000);
console.log('Running');