const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/favourits', trackerController.tracker_favourits);
router.get('/settings', trackerController.tracker_settings_get);
router.get('/', trackerController.tracker_mainpage);
router.post('/', trackerController.tracker_settings_post)


module.exports = router;