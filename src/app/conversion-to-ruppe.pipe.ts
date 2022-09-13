import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversionToRuppe'
})
export class ConversionToRuppePipe implements PipeTransform {

  transform(value: number): unknown {
    return value*70 ;
  }

}
