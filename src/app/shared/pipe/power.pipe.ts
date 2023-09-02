import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, ...powerMath: number[]): number {

    value = Math.pow(value, powerMath[0])
    value = Math.pow(value, powerMath[1])
    value = Math.pow(value, powerMath[2])
    return value;
  }

}