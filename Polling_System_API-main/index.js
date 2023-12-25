const Port=5000
const express=require('express')
const bodyParser=require('body-parser')
const app=express();

const db=require('./config/mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
// Routes
app.use('/',require('./routes/index'));
 
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
  

   
app.listen(Port,function(err){
    if(err){
        console.log("Error in rendering page :" , err);
    }
    console.log("server is runing on port : ",Port);
})