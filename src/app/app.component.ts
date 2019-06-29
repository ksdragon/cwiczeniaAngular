import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addTasks';
  inputValue;
  listTasks: Task[] = [];
  listApprovedTak: Task[] = [];

  approvedTask(task: Task){
    this.listApprovedTak.push(task);
  }

  addTask(inputVal: string){
    let newTask = new Task(inputVal, false);
    this.listTasks.push(newTask);
    this.inputValue = '';
  }

  deleteTask(index: number){
    this.listTasks.splice(index, 1);
  }

  //inna metoda usuwania przez metode filter
  remove(task: Task){
    this.listTasks = this.listTasks.filter( e => e !== task);
  }

}

class Task {
  constructor(public title: string, public statusTask: boolean){};
}
