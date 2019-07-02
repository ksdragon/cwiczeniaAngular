import { ClickService } from './services/click.service';

import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit{
  constructor(private clickService: ClickService){}

  title = 'addTasks';
  inputValue;
  listTasks: Task[] = [];
  listApprovedTak: Task[] = [];
  allClicks: number;

  ngOnInit(): void {
   this.listTasks = [{title: 'Sprzątanie', statusTask: false},
                    {title: 'Prasowanie', statusTask: false},
                    {title: 'Gotowanie', statusTask: false},
                    {title: 'Zakupy', statusTask: false}];
    // obsługa serwisu
   this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks;
    });
  }

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

  // inna metoda usuwania przez metode filter
  remove(task: Task){
    this.listTasks = this.listTasks.filter( e => e !== task);
  }

}

export class Task {
  constructor(public title: string, public statusTask: boolean){}
}
