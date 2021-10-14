import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    return value.trim().split(' ').length;
  }


}
