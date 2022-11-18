import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelToSnakeCase' })
export class CamelToSnakeCasePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
    }
}
