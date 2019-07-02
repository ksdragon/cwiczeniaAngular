import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClick = 0;
  private sum = new Subject<number>();

  addClicks(){
    this.sumClick++;
    this.sum.next(this.sumClick);
    // console.log('Suma: ');
    // console.log(this.sumClick);
    this.log.logger("Kliknięcie");
  }

  getSum(): Observable<number>{
    return this.sum.asObservable();
  }

  constructor(private log: LoggerService) { }
}
