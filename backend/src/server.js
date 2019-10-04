const express = require('express');
const database = require('./config/database');

const routes = require('./routes');

const app = express();
database();

//POST(Create) , GET(Read), Put(Update/Replace) , DELETE

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server running on *:3333');
});