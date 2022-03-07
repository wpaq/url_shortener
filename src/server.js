const app = require('./app');

require('./config/database');

app.listen(process.env.PORT || 3000);
console.log(`Running in http://localhost:${process.env.PORT || 3000}`);