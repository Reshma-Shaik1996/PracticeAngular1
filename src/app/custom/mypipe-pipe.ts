import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: false,
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let val = value as string;
    let prefix = args[0] as string;
    let suffix = args[1] as string;
    let newval = val.toString().padStart(10, suffix);
    return prefix+ newval;
  }



}

//implements PipeTransform interface requires transform method to be defined