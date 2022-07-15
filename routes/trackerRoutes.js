const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/hardware', trackerController.tracker_hardware);
router.get('/settings', trackerController.tracker_settings);
router.get('/software/create', trackerController.tracker_create);
router.get('/software', trackerController.tracker_software);
router.get('/software/:id', trackerController.tracker_edit);
router.post('/software', trackerController.tracker_create_post)
router.post('/software/:id', trackerController.tracker_edit_post);
router.delete('/software/:id', trackerController.tracker_delete);
router.get('/test/create', trackerController.test_create)


module.exports = router;