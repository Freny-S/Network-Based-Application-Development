var student = function (firstName, lastName, degree, program) {
	var studentInfo = {
		firstName : firstName,
	  lastName : lastName,
	  degree : degree,
	  program : program
	}
  return studentInfo;
};

module.exports.student = student;
