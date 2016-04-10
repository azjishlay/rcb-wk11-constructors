// Require main for adding new student to roster
var main = require('./main'); 

exports.Bus = function() {

  console.log("### BUS BUS BUS");

  this.studentsOnTheBus = [];
  this.driverName = "";
  this.color = "";
  this.gas = 0;

  // Add students to the bus
  this.studentGetsOnTheBus = function() {
    for (var i = 0; i < main.classRoster.length; i++) {
      this.studentsOnTheBus.push(main.classRoster[i].name);
    }
  };

  // Output student catchphrase if they can have fun
  this.busChatter = function() {

    // Who is driving the bus?
    console.log(
      this.driverName + 
      " is driving the " +
      this.color + 
      " bus.");

    for (var i = 0; i < main.classRoster.length; i++) {
      if (main.classRoster[i].havingFun) {
        console.log(main.classRoster[i].catchPhrase);
      }
    }

  }
};