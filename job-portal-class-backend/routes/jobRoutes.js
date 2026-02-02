const { createJob, getAllJobs } = require('../controller/jobController');
const { isAuthenticated, checkUserRole } = require('../middlewares/userMiddleware');
const { asyncError } = require('../services/asyncErrro');


const router = require('express').Router();

// router.route("/job").post(createJob)
router.post("/createjob", isAuthenticated, checkUserRole("jobProvider"), asyncError(createJob))
router.get("/jobs", asyncError(getAllJobs))

module.exports = router;