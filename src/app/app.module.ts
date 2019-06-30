import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListPlannedTaskComponent } from './list-planned-task/list-planned-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    ListPlannedTaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
