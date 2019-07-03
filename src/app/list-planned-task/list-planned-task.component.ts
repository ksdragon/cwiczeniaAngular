import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-list-planned-task',
  templateUrl: './list-planned-task.component.html',
  styleUrls: ['./list-planned-task.component.css']
})
export class ListPlannedTaskComponent implements OnInit {

  listTasks: Task [] = [];
  

  constructor(private tasksService: TasksService) {
    tasksService.listTasksOb.subscribe((tasks: Task[]) => {
      this.listTasks = tasks.slice();  
      //slice zwraca nową listę z nową referencją ważne przy pipe sortName
      // nie trzeba zmieniac właściwości pure 
    });
   }

  ngOnInit() {
  }

  getColor(): string {
    return this.listTasks.length >= 5 ? 'red' : 'green';
  }

  deleteTask(i: number){
    this.tasksService.deleteTask(i);
  }

  approvedTask(task: Task){
    task.endDate = new Date();
    this.tasksService.approvedTask(task);
  }
}
