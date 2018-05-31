const express = require ('express');
const app = express();
const mongoose= require('mongoose');
const port = 8080;

app.use(express.json());
require('./model/main');
require('./model/db')(app);
mongoose.connect('mongodb://localhost/UserProfile_portal');

app.listen(port,() => {
console.log(`listening on localhost: ${port}`)
})