const express=require('express');
const bodyparser=require('body-parser');
const mysql=require('mysql');
const app=express();
const port=3000;
app.use(bodyparser.json);
const db=mqsql.createConnection({
    host:'localhost',
    user:'root',
    password:'MOTOEMD',
    database:'esp_data'
});
db.connect(err=>{
    if (err) throw err;
    console.log('Connection to database');
});
app.post('/post-data',(req,res)=>{
   const temperature=req.body.temperature;
   const qurey='insert into sensor data(temperature)value';
   db.query(qurey,[temperature],(err,result)=>{
      if (err) throw err;
      res.send('DATA inserted');
   });
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.listen(port,()=>{
    console.log('Server running oon port ${port}');
});
