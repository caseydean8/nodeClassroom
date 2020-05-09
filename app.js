const inquirer = require("inquirer");
const Classroom = require("./classroom");

const historyClass = new Classroom("History", "Mr Higgins", 22);

historyClass.addStudent("carla", "math", 3.8);

console.log(historyClass);
let classArr = [historyClass];

inquirer
  .prompt([
    {
      message: "please enter a classroom",
      name: "classroom"
    }
  ])
  .then(res => {
    classArr.forEach(classroom => {
      if (classroom.className === res.classroom) {
        console.log(classroom);
        // enterStudent();
      } else {
        createClassroom();
      }
    });
  });

const createClassroom = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "That classroom doesnt exist, would you like to create it?",
        name: "create",
        default: true
      }
    ])
    .then(res => {
      res.create ? addValue() : console.log("WELL FINE THEN!");
    });
};

const addValue = () => {
  inquirer
    .prompt([
      {
        message: "Please enter class name.",
        name: "className"
      },
      {
        message: "Please enter the professors name.",
        name: "professor"
      },
      {
        message: "Please enter the room number",
        name: "roomNumber"
      }
    ])
    .then(res => {
      const classroomName = new Classroom(res.className, res.professor, res.roomNumber);
      console.log("New Classroom:\n", 
      classroomName.className, "\nProfessor:", classroomName.profName, "\nStudents:", classroomName.number);
    });
};
