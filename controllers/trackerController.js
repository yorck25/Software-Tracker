const Software = require('../models/software');
const Hardware = require('../models/hardware');


const tracker_software = (req, res) => {
    Software.find().sort({ end: +1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}

const tracker_software_category = (req, res) => {
    Software.find().sort({category: -1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}

const tracker_software_name = (req, res) => {
    Software.find().sort({ name: +1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}

const tracker_software_start = (req, res) => {
    Software.find().sort({ start: +1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}

const tracker_software_end = (req, res) => {
    Software.find().sort({ end: +1 })
        .then(result => {
            console.log(result);
            res.render('software', { title: "Software", trackers: result });
        })
}


const tracker_settings = (req, res) => {
    res.render('settings', {title: "Settings"})
}

const tracker_hardware = (req, res) => {
    Hardware.find().sort({ warrenty: +1 })
        .then(result => {
            console.log(result);
            res.render('hardware', { title: "Hardware", trackers: result });
        })
}

const tracker_hardware_category = (req, res) => {
    Hardware.find().sort({ category: +1 })
        .then(result => {
            console.log(result);
            res.render('hardware', { title: "Hardware", trackers: result });
        })
}

const tracker_hardware_name = (req, res) => {
    Hardware.find().sort({ name: +1 })
        .then(result => {
            console.log(result);
            res.render('hardware', { title: "Hardware", trackers: result });
        })
}

const tracker_hardware_buy = (req, res) => {
    Hardware.find().sort({ buy: +1 })
        .then(result => {
            console.log(result);
            res.render('hardware', { title: "Hardware", trackers: result });
        })
}

const tracker_hardware_warrenty = (req, res) => {
    Hardware.find().sort({ warrenty: +1 })
        .then(result => {
            console.log(result);
            res.render('hardware', { title: "Hardware", trackers: result });
        })
}

const tracker_software_edit = (req, res) => {
    const id = req.params.id;
        Software.findById(id)
            .then(result => {
                console.log(result.name)
                res.render('software_edit', { title: "Edit", tracker: result })
            })
}

const tracker_hardware_edit = (req, res) => {
    const id = req.params.id;
    Hardware.findById(id)
        .then(result => {
            console.log(result.name)
            res.render('hardware_edit', { title: "Edit", tracker: result })
        })
}

const tracker_software_edit_post = (req, res) => {
    const id = req.params.id;
    Software.findByIdAndUpdate(id, req.body)
        .then(result => {
            res.json({ redirect: '/software' })
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_hardware_edit_post = (req, res) => {
    const id = req.params.id;
    Hardware.findByIdAndUpdate(id, req.body)
        .then(result => {
            res.json({ redirect: '/hardware' })
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_delete_software = (req, res) => {
    const id = req.params.id;
    Software.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/software' });
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_delete_hardware = (req, res) => {
    const id = req.params.id;
    Hardware.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/hardware' });
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_software_create = (req, res) => {
    res.render('software_create', { title: "Create"})
}

const tracker_software_create_post = (req, res) => {
    const software = new Software(req.body);
    software.save()
        .then(result => {
            res.json({ redirect: '/software' });
        })
        .catch(err => {
            console.log(err);
        });
}

const tracker_hardware_create = (req, res) => {
    res.render('hardware_create', { title: "Create"})
}

const tracker_hardware_create_post = (req, res) => {
    const hardware = new Hardware(req.body);
    hardware.save()
        .then(result => {
            res.json({ redirect: '/hardware' });
        })
        .catch(err => {
            console.log(err);
        });
}

const test_create = (req, res) => {
    res.render('software_create', { title: "Create" })
}

const test_edit = (req, res) => {
    res.render('edit1', { title: "Edit"})
}

const login = (req, res) => {
    res.render('login', { title: 'Login' })
}

const register = (req, res) => {
    res.render('register', { title: 'Registrieren', message: "" })
}

const userLog = (req, res) => {
    res.render('user')
}


module.exports = {
    tracker_hardware,
    tracker_hardware_category,
    tracker_hardware_name,
    tracker_hardware_buy,
    tracker_hardware_warrenty,
    tracker_settings,
    tracker_software,
    tracker_software_category,
    tracker_software_name,
    tracker_software_start,
    tracker_software_end,
    tracker_software_edit,
    tracker_hardware_edit,
    tracker_software_edit_post,
    tracker_hardware_edit_post,
    tracker_delete_software,
    tracker_delete_hardware,
    tracker_software_create,
    tracker_software_create_post,
    tracker_hardware_create,
    tracker_hardware_create_post,
    test_create,
    test_edit,
    login,
    register,
    userLog,
}