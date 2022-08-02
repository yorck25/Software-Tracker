const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const trackerController = require("../controllers/trackerController")
module.exports = function (app) {
    app.use(function (req, res, next) {
        let token = req.cookies['x-access-token']
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/user", [authJwt.verifyToken], controller.userBoard);
    app.get('/user', [authJwt.verifyToken], trackerController.userLog)
    app.get('/software', [authJwt.verifyToken], trackerController.tracker_software);
    app.get('/software.category', [authJwt.verifyToken], trackerController.tracker_software_category);
    app.get('/software.name', [authJwt.verifyToken], trackerController.tracker_software_name);
    app.get('/software.start', [authJwt.verifyToken], trackerController.tracker_software_start);
    app.get('/software.end', [authJwt.verifyToken], trackerController.tracker_software_end);
    app.get('/hardware', [authJwt.verifyToken], trackerController.tracker_hardware);
    app.get('/hardware.category', [authJwt.verifyToken], trackerController.tracker_hardware_category);
    app.get('/hardware.name', [authJwt.verifyToken], trackerController.tracker_hardware_name);
    app.get('/hardware.buy', [authJwt.verifyToken], trackerController.tracker_hardware_buy);
    app.get('/hardware.warrenty', [authJwt.verifyToken], trackerController.tracker_hardware_warrenty);
    app.get('/settings', [authJwt.verifyToken], trackerController.tracker_settings);
    app.get('/software/create', [authJwt.verifyToken], trackerController.tracker_software_create);
    app.get('/hardware/create', [authJwt.verifyToken], trackerController.tracker_hardware_create)
    app.get('/software/:id', [authJwt.verifyToken], trackerController.tracker_software_edit);
    app.get('/hardware/:id', [authJwt.verifyToken], trackerController.tracker_hardware_edit);
    app.post('/software', [authJwt.verifyToken], trackerController.tracker_software_create_post)
    app.post('/hardware', [authJwt.verifyToken], trackerController.tracker_hardware_create_post)
    app.post('/software/:id', [authJwt.verifyToken], trackerController.tracker_software_edit_post);
    app.post('/hardware/:id', [authJwt.verifyToken], trackerController.tracker_hardware_edit_post);
    app.delete('/software/:id', [authJwt.verifyToken], trackerController.tracker_delete_software);
    app.delete('/hardware/:id', [authJwt.verifyToken], trackerController.tracker_delete_hardware);
    app.delete('/settings/:id', [authJwt.verifyToken], trackerController.tracker_delete_settings);
    app.get('/test/create', [authJwt.verifyToken], trackerController.test_create)
    app.get('/test/edit', [authJwt.verifyToken], trackerController.test_edit);

};