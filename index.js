var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
const path = require("path")


app.use("/path",(req,res)=>{
  res.end(`path resolve is response from server ${path.resolve(__dirname, '../build')}`)
})

//no build locally
app.use(express.static(path.join(__dirname,'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build'))
})



app.listen(PORT,function(){
  console.log('server successfully started on port '+PORT);
});