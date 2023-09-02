import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mamyPipe'
})
export class MamyPipe implements PipeTransform {

  transform(value: number): string {

    let letterNumber = ["Un", "Deux", "Trois", "Quatre", "Cinq"]

    return letterNumber[value-1]
  }

}
