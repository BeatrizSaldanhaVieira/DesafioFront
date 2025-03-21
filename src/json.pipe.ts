import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json'
})
export class JsonPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    return JSON.stringify(value, null, 2); // Converte o objeto para JSON formatado
  }
}
