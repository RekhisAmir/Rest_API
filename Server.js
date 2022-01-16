var express = require ('express')
const app = express()
const router = require('express').Router()
const DB_Connect = require('./config/DB_Connection')
const { getAllUsers, addUsers, editUser, deleteUser } = require('./controllers/UserCtrl')

DB_Connect()

router.get('/users', getAllUsers)

router.post('/add', addUsers)

router.put('/edit/:id', editUser)

router.delete('/delete/:id', deleteUser)

app.use(express.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, err=> err? console.log(err): console.log(`Server running on port ${PORT}`))
