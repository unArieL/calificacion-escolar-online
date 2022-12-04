const express = require('express')
const alumnoController = require('../controller/alumnoController')
const router = express.Router()

router.get('/alumno-login', alumnoController.login)

module.exports = router