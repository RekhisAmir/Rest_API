const mongoose = require ('mongoose')
const DB_Connect = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/rest_api');
        console.log("Connected to Data Base Successfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports = DB_Connect