function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}
  
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks.slice();
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / this.marks.length;
}

Student.prototype.exclude = function (reson) {
  delete this.subject;
  delete this.marks;
  this.excluded = reson;
};

let student1 = new Student("Mark", "male", 45);
student1.setSubject("Programming");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());

let student2 = new Student("Ann", "female", 34);
student2.setSubject("Programming");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
console.log(student2.getAverage());
student2.exclude('low grades');

console.log(student1);
console.log(student2);