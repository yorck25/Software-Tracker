const Tracker = require('../models/tracker');


const tracker_software = (req, res) => {
    Tracker.find().sort({ end: +1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}



const tracker_settings = (req, res) => {
    res.render('settings', {title: "Settings"})
}

const tracker_hardware = (req, res) => {
    res.render('hardware', {title: "Hardware"})
}

const tracker_edit = (req, res) => {
    const id = req.params.id;
        Tracker.findById(id)
            .then(result => {
                console.log(result.name)
                res.render('edit', { tracker: result })
            })
}

const tracker_edit_post = (req, res) => {
    const id = req.params.id;
    Tracker.findByIdAndUpdate(id, req.body)
        .then(result => {
            res.json({ redirect: '/software' })
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_delete = (req, res) => {
    const id = req.params.id;
    Tracker.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/software' });
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_create = (req, res) => {
    res.render('create')
}

const tracker_create_post = (req, res) => {
    const tracker = new Tracker(req.body);
    tracker.save()
        .then(result => {
            res.redirect('/software');
        })
        .catch(err => {
            console.log(err);
        });
}

const test_create = (req, res) => {
    res.render('create')
}



module.exports = {
    tracker_hardware,
    tracker_settings,
    tracker_software,
    tracker_edit,
    tracker_edit_post,
    tracker_delete,
    tracker_create,
    tracker_create_post,
    test_create,
}