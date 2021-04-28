var express = require('express');
var router = express.Router();

var controller = require('../controllers/jobs');

/* GET jobs listing. */
router.get('/', controller.list);

module.exports = router;
