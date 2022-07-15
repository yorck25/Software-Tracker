const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/favourits', trackerController.tracker_favourits);
router.get('/:id', trackerController.tracker_edit);
router.get('/settings', trackerController.tracker_settings_get);
router.get('/', trackerController.tracker_mainpage);
router.post('/', trackerController.tracker_settings_post);
router.post('/:id', trackerController.tracker_edit_post)


module.exports = router;