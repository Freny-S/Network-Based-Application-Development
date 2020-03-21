var express = require('express');

var router = express.Router();

router.get('/',function(request,response){
	if (request.query.firstName == null || request.query.lastName == null || request.query.degree == null || request.query.program == null ){
		response.send('No information available or requested');
	}else{
		var studentInfo = require('./../models/student');
  		studentInfo = studentInfo.student(request.query.firstName,request.query.lastName,request.query.degree,request.query.program);
  		response.render('main',{student:studentInfo});
	}

});

module.exports = router;
