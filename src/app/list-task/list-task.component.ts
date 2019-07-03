import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listApprovedTak: Task[];
  constructor(private tasksService: TasksService) { 
    tasksService.listAprrovedTasksOb.subscribe((tasks: Task[]) => {
      this.listApprovedTak = tasks;
    });
  }

  ngOnInit() {
  }

}
