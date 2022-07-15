const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const trackerRoutes = require('./routes/trackerRoutes')

var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const app = express();

app.use(connectLiveReload());

const dbURI = "mongodb+srv://" + process.env.USER + ":" + process.env.PASS + "@cluster0.aen15qn.mongodb.net/SoftwareTracker?retryWrites=true&w=majority";


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

console.log("Listining on port 3000")

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


app.get('/', (req, res) => {
    res.redirect('/mainpage');
});

app.use('/mainpage', trackerRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});