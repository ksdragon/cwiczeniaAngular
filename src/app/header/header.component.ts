import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputValue: string;
  @Output() emitInputValue = new EventEmitter<string>();

  addTask(input: string){
    this.emitInputValue.emit(input);
    this.inputValue = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
