var express = require('express');
var app = express();


var PORT = process.env.PORT || 5000;
const path = require("path")
const cors = require("cors")
const morgan = require("morgan")


app.use(cors())
app.use(morgan("dev"))

const secondRouter = require("./Routes/second_route");

app.use("/path",(req,res)=>{
  res.end(`path resolve is response from server ${path.resolve(__dirname, '../build')}`)
})



app.use("/first",(req,res)=>{
	res.end("first-backend-connected ")
})

app.use("/fuck",(req,res)=>{
	res.end("fucking-backend-connected ")
})



app.use("/second",secondRouter);




//no build locally
app.use(express.static(path.join(__dirname,'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build'))
})





app.listen(PORT,'0.0.0.0');