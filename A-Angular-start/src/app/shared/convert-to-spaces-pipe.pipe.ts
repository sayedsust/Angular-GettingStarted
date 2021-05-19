import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpacesPipe'
})
export class ConvertToSpacesPipePipe implements PipeTransform {

  transform(value: string, charackter:string): unknown {
    return value.replace(charackter, ' ');
  }

}
