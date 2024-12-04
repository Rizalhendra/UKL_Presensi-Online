const { authorize } = require('../controller/auth.controller')


const express = require('express')
const app = express()


app.use(express.json())


const userController = 
require('../controller/user.controller')


app.post('/', [authorize], userController.addUser)


app.put('/:id', [authorize], userController.updateUser)
app.get('/:id', [authorize], userController.getUserById)
app.delete('/:id', [authorize], userController.deleteUser)
module.exports = app