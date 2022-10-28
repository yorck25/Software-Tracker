const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/login', trackerController.login)
router.get('/register', trackerController.register)
router.get('/software', trackerController.tracker_software);
router.get('/hardware', trackerController.tracker_hardware);
router.get('/users', trackerController.tracker_users);
router.get('/software/create', trackerController.tracker_software_create);
router.get('/hardware/create', trackerController.tracker_hardware_create)
router.get('/software/:id', trackerController.tracker_software_edit);
router.get('/hardware/:id', trackerController.tracker_hardware_edit);
router.get('/users/:id', trackerController.tracker_users_edit);
router.post('/software', trackerController.tracker_software_create_post)
router.post('/hardware', trackerController.tracker_hardware_create_post)
router.post('/software/:id', trackerController.tracker_software_edit_post);
router.post('/hardware/:id', trackerController.tracker_hardware_edit_post);
router.delete('/software/:id', trackerController.tracker_delete_software);
router.delete('/hardware/:id', trackerController.tracker_delete_hardware);
router.delete('/users/:id', trackerController.tracker_delete_users)



module.exports = router;