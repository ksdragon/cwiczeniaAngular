import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputValue: string;  

  addTask(){
    this.tasksService.addTask(this.inputValue);    
    this.inputValue = '';
  }
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

}
