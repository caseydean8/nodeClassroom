const inquirer = require("inquirer");
const Student = require("./student");
// * An array of students within the class
//   * Number of students in the class
//   * Name of the professor
//   * Room number
//   * The Student constructor function from above which adds a new student to the class

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