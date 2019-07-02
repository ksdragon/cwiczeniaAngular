import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {



  logger(log: string) {
    console.log(log);
  }

  constructor() { }
}
