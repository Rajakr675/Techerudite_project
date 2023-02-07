const express = require('express');
const Router = express.Router()
const Controller = require('./Controller')

Router.post('/Customer',Controller.CustomerRegistration)    //
Router.post('/Admin',Controller.AdminRegistrations)
Router.post("/Login_Admin",Controller.Admin_Login)



module.exports = Router