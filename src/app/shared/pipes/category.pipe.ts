import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  // Pipe sao funcao que transforma um valor de entrada em um valor de saida

  transform(value: string): string {
    switch (value) {
      	case 'Frontend': return 'code';
        case 'Backend': return 'computer';
    }
    return 'code';
  }

}
