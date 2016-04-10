var prompt = require('prompt');
var fs = require('fs');


var student = require('./student.js'); 
var classRoster = [];

fs.readFile("roster.txt","utf-8", function(err,data) {

  // Get existing roster
  if (data) {
    classRoster = JSON.parse(data);
  } else {
    classRoster = [];
  }
  

  // Export roster
  exports.classRoster = classRoster;
  // console.log(classRoster);

  // Add more students until max is reached
  student.getStudents();

});