import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'sanitizeHtml' })
export class SanitizePipe implements PipeTransform {
    constructor(private readonly _sanitizer: DomSanitizer) {}

    transform(value: string): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
}
