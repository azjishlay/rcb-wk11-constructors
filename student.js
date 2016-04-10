var prompt = require('prompt');
var fs = require('fs');

// Require main for adding new student to roster
var main = require('./main'); 

// Require bus for making new bus
var bus = require('./bus.js'); 

exports.getStudents = function() {

  if (main.classRoster.length < 4) {

    console.log("Not enough students to make a bus yet. Add another student:");

    var studentInfo = {
      properties: {
        name: {
          validator: /^[a-zA-Z\s\-]+$/,
          warning: 'Name must be only letters, spaces, or dashes',
          required: true
        },
        gpa: {
          validator: /^[0-9]\d*$/,
          warning: 'GPA must be number',
          required: true
        },
        detentions: {
          validator: /^[0-9]\d*$/,
          warning: 'Number of detentions must be number',
          required: true
        },
        catchPhrase: {
          type: 'string',
          required: false
        }
      }
    };

    prompt.get(studentInfo, function (err, result) {

      // Student constructor
      var Student = function(name,gpa,detentions,catchPhrase) 
      {
        this.name = name;
        this.gpa = gpa;
        this.detentions = detentions;
        this.catchPhrase = catchPhrase;
        this.havingFun = true;

        this.canStudentHaveFun = function() {
          if (this.detentions < 10 && this.gpa > 2) {
            // console.log(this.name + " can have fun!");
            this.havingFun = true;
          } else {
            // console.log(this.name + " cannot have fun.");
            this.havingFun = false;
          }
        }

      }

      // Make temp student
      var tempStudent = new Student();
        tempStudent.name = result.name;
        tempStudent.gpa = result.gpa;
        tempStudent.detentions = result.detentions;
        tempStudent.catchPhrase = result.catchPhrase;

      // Update temp student to roster
      main.classRoster.push(tempStudent);

      // Rewrite roster
      fs.writeFile("roster.txt", JSON.stringify(main.classRoster), function(err){
        if (err) {
          console.log(err);
        } else {
          console.log(result.name + " was added to the class roster.");
          prompt.start();
        }
      });

    });
  } else {
    console.log("All of the students are on the bus.");

    // Make a new bus
    var myBus = new bus.Bus();
    myBus.driverName = "RuPaul Andre Charles";
    myBus.color = "orange";


    // Show all the chatter
    myBus.busChatter();

  }
}