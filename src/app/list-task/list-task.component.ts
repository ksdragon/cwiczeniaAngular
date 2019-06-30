import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  @Input() listApprovedTak: Task[];
  constructor() { }

  ngOnInit() {
  }

}
