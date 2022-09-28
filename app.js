const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
require('dotenv').config();
const trackerRoutes = require('./routes/trackerRoutes');
const cors = require('cors')
var corsOptions = {
    origin: "http://localhost:8081"
};

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

app.set('view engine', 'ejs');

app.use(cookieParser())

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

const db = require('./models');
const Role = db.role;
const dbConfig = require('./config/db.config');
db.mongoose
    .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);



app.get('/', (req, res) => {
    res.redirect('/software');
});

app.use('', trackerRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});