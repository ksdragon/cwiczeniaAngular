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
import { CheckedDirective } from './shered/checked.directive';
import { DateDirective } from './shered/date.directive';
import { TransformTaskPipe } from './shered/transform-task.pipe';
import { SortNamePipe } from './shered/sort-name.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    ListPlannedTaskComponent,
    KlikaczComponent,
    Klikacz1Component,
    Klikacz2Component,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    HttpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
