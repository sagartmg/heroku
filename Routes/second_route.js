

const express = require('express');
const secondRouter = express.Router();





secondRouter.get('/hello',(req,res)=>{
	res.end("hello from second fuck yeah  subfolder")
});




// exports.router;
module.exports = secondRouter;