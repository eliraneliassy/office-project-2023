import { ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'o-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi:true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {
  


  @Input() isRequired?: boolean;
  @Input() pattern?: string;
  @Input() type = 'text';
  @Input() errorMsg?: string;

  @Input() label?: string;

  @ViewChild('input') input?: ElementRef;

  disabled = false;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validators: ValidatorFn[] = [];

    if (this.isRequired) {
      validators.push(Validators.required)
    }

    if(this.pattern) {
      validators.push(Validators.pattern(this.pattern))
    }

    return validators;
  }

  onChange(value: string) {

  }

  onTouch() {

  }

  writeValue(obj: any): void {
    
    if (this.input) {
      this.input.nativeElement.value = obj
    }

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputComponentModule { }
