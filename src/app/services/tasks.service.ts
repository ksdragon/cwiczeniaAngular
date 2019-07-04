
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  title = 'addTasks';
  // listTasks: Task[] = [];
  // listApprovedTak: Task[] = [];
  listTasksOb = new BehaviorSubject<Task[]>([]);
  allClicks: number;

constructor(){
    const listTasks = [{title: 'Sprzątanie', statusTask: false, dateCreated: new Date().toLocaleString()},
                    {title: 'Prasowanie', statusTask: false, dateCreated: new Date().toLocaleString()},
                    {title: 'Gotowanie', statusTask: false, dateCreated: new Date().toLocaleString() },
                    {title: 'Zakupy', statusTask: false, dateCreated: new Date().toLocaleString()}]; 
    this.listTasksOb.next(listTasks);
  }

 
  // listAprrovedTasksOb = new BehaviorSubject<Task[]>(this.listApprovedTak);

  approvedTask(task: Task){
    task.endDate = new Date().toLocaleString();
    task.statusTask = true;
    const list = this.listTasksOb.getValue()
    this.listTasksOb.next(list);
    // this.listApprovedTak.push(task);
    // this.listTasks = this.listTasks.filter( e => e !== task);
    // this.listTasksOb.next(this.listTasks);
    // this.listAprrovedTasksOb.next(this.listApprovedTak);
  }

  addTask(inputVal: string){
    const newTask: Task = ({title:inputVal,statusTask: false, dateCreated: new Date().toLocaleString()});
    const list = this.listTasksOb.getValue()
    list.push(newTask);    
    this.listTasksOb.next(list);
  }

  deleteTask(index: number){
    const list = this.listTasksOb.getValue()
    list.splice(index, 1);
    this.listTasksOb.next(list);
  }

  // inna metoda usuwania przez metode filter
  remove(task: Task){
    const list = this.listTasksOb.getValue().filter( e => e !== task);
    this.listTasksOb.next(list);
  }

}


