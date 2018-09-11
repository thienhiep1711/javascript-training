const Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('Completing task:' + this.name)
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving task:' + this.name);
}

const task1 = new Task('create a demo for constructors');
const task2 = new Task('create a demo for modules');
const task3 = new Task('create a demo for singletons');
const task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();