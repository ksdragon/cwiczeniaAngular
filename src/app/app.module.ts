import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListPlannedTaskComponent } from './list-planned-task/list-planned-task.component';
import { KlikaczComponent } from './klikacz/klikacz.component';
import { Klikacz1Component } from './klikacz/klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz/klikacz2/klikacz2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    ListPlannedTaskComponent,
    KlikaczComponent,
    Klikacz1Component,
    Klikacz2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
