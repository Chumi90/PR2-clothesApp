//Index aplication
const express=require("express");
const app=express();
require('dotenv').config();
//Variables de configuración
const PORT=process.env.PORT || 8080;



//
app.use(express.json);
app.use(express.urlencoded({extended: true}))

app.listen(PORT,()=> console.log(`Active server in http://localhost:${PORT}`));