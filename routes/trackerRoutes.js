const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/login', trackerController.login)
router.get('/user', trackerController.userLog)
router.get('/register', trackerController.register)
router.get('/software', trackerController.tracker_software);
router.get('/hardware', trackerController.tracker_hardware);
router.get('/settings', trackerController.tracker_settings);
router.get('/software/create', trackerController.tracker_software_create);
router.get('/hardware/create', trackerController.tracker_hardware_create)
router.get('/software/:id', trackerController.tracker_software_edit);
router.get('/hardware/:id', trackerController.tracker_hardware_edit);
router.post('/software', trackerController.tracker_software_create_post)
router.post('/hardware', trackerController.tracker_hardware_create_post)
router.post('/software/:id', trackerController.tracker_software_edit_post);
router.post('/hardware/:id', trackerController.tracker_hardware_edit_post);
router.delete('/software/:id', trackerController.tracker_delete_software);
router.delete('/hardware/:id', trackerController.tracker_delete_hardware);
router.delete('/settings/:id', trackerController.tracker_delete_settings)
router.get('/test/create', trackerController.test_create)
router.get('/test/edit', trackerController.test_edit);


module.exports = router;