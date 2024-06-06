const express = require('express')
const conn =   require('./database/Dbconnection')
const bodyParser = require('body-parser');
const studentSave = require('./Routes/stdEntery')
const Deletestd = require('./Routes/Deletestd')
const Findstd = require('./Routes/Findstd')
const Updatestd = require('./Routes/Updatestd')



conn();
const app = express();
const port = 4000;
//app.get('/',(req,res)=>res.send('Hello Vinay'))

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies


// Routes
app.use('/', studentSave);
app.get('/',(req,res)=>{res.send("Student Data")})
app.use('/',Deletestd)
app.use('/',Findstd)
app.use('/',Updatestd)



app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);