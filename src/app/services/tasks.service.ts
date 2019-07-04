
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  title = 'addTasks';

  listTasks: Task[] = [];
  listApprovedTak: Task[] = [];
  allClicks: number;

constructor(){
   this.listTasks = [{title: 'Sprzątanie', statusTask: false, dateCreated: new Date().toLocaleString()},
                    {title: 'Prasowanie', statusTask: false, dateCreated: new Date().toLocaleString()},
                    {title: 'Gotowanie', statusTask: false, dateCreated: new Date().toLocaleString() },
                    {title: 'Zakupy', statusTask: false, dateCreated: new Date().toLocaleString()}]; 
    this.listTasksOb.next(this.listTasks);
  }

  listTasksOb = new BehaviorSubject<Task[]>(this.listTasks);
  listAprrovedTasksOb = new BehaviorSubject<Task[]>(this.listApprovedTak);

  approvedTask(task: Task){
    this.listApprovedTak.push(task);
    this.listTasks = this.listTasks.filter( e => e !== task);
    this.listTasksOb.next(this.listTasks);
    this.listAprrovedTasksOb.next(this.listApprovedTak);
  }

  addTask(inputVal: string){
    const newTask: Task = ({title:inputVal,statusTask: false, dateCreated: new Date().toLocaleString()});
    this.listTasks.push(newTask);    
    this.listTasksOb.next(this.listTasks);
  }

  deleteTask(index: number){
    this.listTasks.splice(index, 1);
    this.listTasksOb.next(this.listTasks);
  }

  // inna metoda usuwania przez metode filter
  remove(task: Task){
    this.listTasks = this.listTasks.filter( e => e !== task);
  }

}


