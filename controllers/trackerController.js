const Tracker = require('../models/tracker');


const tracker_mainpage = (req, res) => {
    Tracker.find().sort({ end: +1 })
        .then(result => {
            console.log(result);
            res.render('mainpage', { title: "Mainpage", trackers: result });
        })
}



const tracker_settings_get = (req, res) => {
    res.render('settings', {title: "Settings"})
}

const tracker_favourits = (req, res) => {
    res.render('favourits', {title: "Favourits"})
}

const tracker_settings_post = (req, res) => {
    const tracker = new Tracker(req.body);
    tracker.save()
        .then(result => {
            res.redirect('/mainpage');
        })
        .catch(err => {
            console.log(err);
        })
}



module.exports = {
    tracker_favourits,
    tracker_settings_get,
    tracker_mainpage,
    tracker_settings_post,
}