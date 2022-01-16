const User = require ('../models/User')
const getAllUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

const addUsers = async (req,res)=>{
    try {
        const {name,email,age,address}=req.body
        const newUser = new User ({name,email,age,address})
        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

const editUser = async (req,res)=>{
    try {
        const id = req.params.id
        const editedUser = await User.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(201).send(editedUser)
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(201).send(deletedUser)
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

module.exports = {getAllUsers,addUsers,editUser,deleteUser}