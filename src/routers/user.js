const express = require('express')
const auth = require('../middleware/auth')
const userController = require('../contollers/user')
const router = new express.Router()

//The users routers starts from here
router.post('/api/users', userController.signUp)
router.post('/api/users/login', userController.logIn)
router.post('/api/users/logout', auth, userController.logOut)
router.post('/api/users/logoutAll', auth, userController.logOutAll)
router.get('/api/users/me',auth, userController.getMyInfo)
router.patch('api//users/me',auth, userController.updateUser)
router.delete('/api/users/me',auth, userController.deleteUser)
module.exports = router