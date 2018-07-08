const express          =  require('express');
var   router           =   express.Router();
var   userController   =  require('../controller/usercontroller');
var multer             =  require('multer');
var uuid               = require('uuid');
var path               = require('path');
var fs                  = require('fs');






  //route 

router.post('/user/new' , userController.createUser);
router.get('/api/user/register', userController.registeruser);
router.get('/api/user/getall', userController.getalluser);
router.post('/api/user/delete', userController.removeUser);
router.post('/api/user/edit', userController.editUser);
//router.post('/api/user/login', userController.login);








//exports route
module.exports = router;
