
const mongo = require('mongoose')   
const mongoURL = 'mongodb+srv://Rajlaxmi123:Vinay123@cluster0.ptkm1ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const conn = ()=>{
    mongo.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e)=>{
        console.log(e)
    })
}
module.exports = conn;