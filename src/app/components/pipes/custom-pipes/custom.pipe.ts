import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, item : string = ""): string {
    return "I love "+value+ " " +item;
  }

}
