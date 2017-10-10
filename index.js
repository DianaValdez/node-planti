'use strict'

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const app = express();

const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




//******************CONEXION MONGODB*******************
mongoose.connect('mongodb://localhost:27017/angularRoutingApp',(err, res)=>{
	if(err){
		return console.log('Error al conectar con la BD: ${err}')
	}
	console.log('La conexión fue exitosa')
	app.listen(port, ()=>{
		console.log(`API REST corriendo en localhost:${port}`)
	})
})