import { ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, Self, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'o-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: InputComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   multi:true,
    //   useExisting: InputComponent
    // }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator, OnInit {

  @Input() isRequired?: boolean;
  @Input() pattern?: string;
  @Input() type = 'text';
  @Input() errorMsg?: string;

  @Input() label?: string;

  @ViewChild('input') input?: ElementRef;

  disabled = false;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ?
      [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }
  


validate(): ValidationErrors | null {
  console.log(1);
  const validators: ValidatorFn[] = []
  // this.controlDir.validator ? [this.controlDir.validator] : [];

  if (this.isRequired) {
    validators.push(Validators.required)
  }

  if (this.pattern) {
    validators.push(Validators.pattern(this.pattern))
  }

  // this.controlDir.control.setValidators(validators);
  // this.controlDir.control?.updateValueAndValidity();

  return validators;
}

onChange(value: string) {

}

onTouch() {

}

writeValue(obj: any): void {

  if(this.input) {
  this.input.nativeElement.value = obj
}

  }
registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouch = fn;
}
setDisabledState ? (isDisabled: boolean): void {
  this.disabled = isDisabled;
}
}

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputComponentModule { }
