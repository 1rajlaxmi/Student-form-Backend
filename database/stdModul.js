const mongoose = require('mongoose')
const stdSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    RollNo : {
        type:Number,
        required:true,
        unique:true
    },
    Age:{
        type:Number,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    Course:{
        type:String,
        required:true
    }
})
const std = mongoose.model("std",stdSchema)
module.exports = std;