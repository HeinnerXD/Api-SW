const TestController = require('../controllers/test.controller')
const routes = require('express').Router()

routes.get('/home', TestController.Test)
routes.get('/products', TestController.Test)


module.exports = routes