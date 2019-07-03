import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'sortName',
  // pure: true
})
export class SortNamePipe implements PipeTransform {

  transform(value: Task[], ...args: any[]): any {
    return value.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
      }else{
        return -1;
      }
    });
  }

}
