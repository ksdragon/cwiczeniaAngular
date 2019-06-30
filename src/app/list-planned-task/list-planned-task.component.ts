import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-list-planned-task',
  templateUrl: './list-planned-task.component.html',
  styleUrls: ['./list-planned-task.component.css']
})
export class ListPlannedTaskComponent implements OnInit {

  @Input() listTasks: Task [] = [];
  @Output() emitSelectedItem = new EventEmitter<number>();
  @Output() emitTaskApproved = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(i: number){
    this.emitSelectedItem.emit(i);
  }

  approvedTask(task: Task){
    this.emitTaskApproved.emit(task);
  }
}
