const {Router} = require('express');
const { getStudents } = require('../Controllers/students.controller');
const router = Router();

router.get('/',getStudents)

module.exports = router