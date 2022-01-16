var mongoose = require ('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true},

    email:{type:String,
           required:true},

    age:{type:Number,
        required:true},

    address:{type:String,
        required:true}
})
module.exports = mongoose.model("User", schema)