import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-list-planned-task',
  templateUrl: './list-planned-task.component.html',
  styleUrls: ['./list-planned-task.component.css']
})
export class ListPlannedTaskComponent implements OnInit {

  listTasks: Task [] = [];
  

  constructor(private tasksService: TasksService) {
    tasksService.listTasksOb.subscribe((tasks: Task[]) => {
      this.listTasks = tasks;
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
    this.tasksService.approvedTask(task);
  }
}
