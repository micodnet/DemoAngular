import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurToBtc'
})
export class EurToBtcPipe implements PipeTransform {

  transform(value: number): string {
    return value / 26500 + 'BTC';
  }

}
