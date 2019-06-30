import { Component, Output, EventEmitter } from '@angular/core';

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

  // @Output() emitListTasks = new EventEmitter<Task[]>();
  // @Output() emitListApprovedTasks = new EventEmitter<Task[]>();

  approvedTask(task: Task){
    this.listApprovedTak.push(task);
    this.listTasks = this.listTasks.filter( e => e !== task);
  }

  addTask(inputVal: string){
    const newTask: Task = ({title:inputVal,statusTask: false});
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

export class Task {
  constructor(public title: string, public statusTask: boolean){}
}
