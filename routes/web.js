const express = require('express')
const frontcontroller = require('../controllers/frontcontroller')
const admincontroller = require('../controllers/admin/admincontroller')
const CategoryController = require('../controllers/admin/Categorycontroller')
const Blogcontroller = require('../controllers/admin/Blogcontroller')
const route = express.Router()

//routing
route.get('/', frontcontroller.home)

route.get('/about', frontcontroller.about)

route.get('/bloglist', frontcontroller.bloglist)

route.get('/contact', frontcontroller.contact)

route.get('/login', frontcontroller.login)

//admin
route.get('/admin/dashboard', admincontroller.dashboard)

//category
route.get('/admin/categorydisplay', CategoryController.display)

//blog
route.get('/admin/blogdisplay', Blogcontroller.display)


module.exports = route