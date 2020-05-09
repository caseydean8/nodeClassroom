const Student = require("./student");

const Classroom = function(className, profName, roomNum) {
  this.className = className;
  this.students = [];
  this.number = 0;
  this.profName = profName;
  this.roomNum = roomNum;
  this.addStudent = function(name, favSub, gpa) {
    this.students.push(new Student(name, favSub, gpa));
    this.number++;
  };
};

module.exports = Classroom;
