'use strict';

function Human() {
  this.name = 'John';
  this.age = '25';
  this.gender = 'male';
  this.height = '198';
  this.weight = '95';
}

function Worker(placeOfWork, salary) {
  Human.call(this, name);
  this.placeOfWork = placeOfWork;
  this.salary = salary;
  this.toWork = function() {
    return ('I am ' + this.name + '. I work at ' + this.placeOfWork + ' for ' + this.salary + '$ per month. I\'m working hard!');
  }
}

Worker.prototype = Object.create(Human.prototype);

function Student(placeOfStudy, grant) {
  Human.call(this, name);
  this.placeOfStudy = placeOfStudy;
  this.grant = grant;
  this.toWatchTVShows = function() {
    return ('I am a student. My name is ' + this.name + '. I study at ' + this.placeOfStudy + ' and get grant in an amount of ' + this.grant + '$ per month. I like watch TV shows!');
  }
}

Student.prototype = Object.create(Human.prototype);

var worker = new Worker('Best company', 500),
  worker1 = new Worker('Another company', 800),
  worker2 = new Worker('Some company', 600);

console.log(worker);
console.log(worker.toWork());

console.log(worker1);
console.log(worker1.toWork());

console.log(worker2);
console.log(worker2.toWork());

var student = new Student('Harvard', 400),
  student1 = new Student('Yale', 500),
  student2 = new Student('Princeton', 600);

console.log(student);
console.log(student.toWatchTVShows());

console.log(student1);
console.log(student1.toWatchTVShows());

console.log(student2);
console.log(student2.toWatchTVShows());
