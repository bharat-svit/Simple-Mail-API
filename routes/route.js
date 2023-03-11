const express  =  require('express')
const route = express.Router()
const controller = require('../controller/controller');

route.post('/user/signup' , controller.send);
route.post('/user/gmailsend' , controller.gmailsend);





module.exports = route
