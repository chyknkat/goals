import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[numberInput]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberInputDirective, multi: true }]
})
export class NumberInputDirective {

  @Input('numberInput') input: number[] | null;

  // Allow special characters
  private specialKeys: string[] = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    const isSpecialKey = this.specialKeys.indexOf(event.key) !== -1;
    const isDigit = event.key.match(/^\d$/g);
    const isMinus = event.key.match(/^-$/g);

    let value = this.el.nativeElement.value || '';

    // Allow special keys specified above
    if (isSpecialKey || isDigit || isMinus) {
      if (isMinus) {
        if (value.indexOf('-') > -1) event.preventDefault();
        else this.el.nativeElement.value = '-' + value; 
      }
      else return;
    }

    // Prevent input // will dublicate if inserted
    event.preventDefault();
  }
  
  validate(control: AbstractControl): ValidationErrors {

    const min: number | null = this.isValue(this.input) ? (this.isValue(this.input[0]) ? this.input[0] : null) : null;
    const max: number | null = this.isValue(this.input) ? (this.isValue(this.input[1]) ? this.input[1] : null) : null;

    const value: number | null = this.isValue(control.value) ? ~~control.value.toString().trim() : null;    
    let result = false;

    if (this.isValue(value) && this.isValue(min) && this.isValue(max)) result = value >= min && value <= max;
    else if (this.isValue(value) && this.isValue(min)) result = value >= min;
    else if (this.isValue(value) && this.isValue(max)) result = value <= max;
    else result = true;

    return result ? null : { 'valid': false };
  }

  isValue(value: any) {
    return (typeof value !== 'undefined') && value !== null;
  }

}