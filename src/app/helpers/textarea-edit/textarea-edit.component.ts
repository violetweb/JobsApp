import { Component, Input, ElementRef, ViewChild, Renderer, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_CONTROL_VALUE_ACCESSOR = {
  	provide: NG_VALUE_ACCESSOR,
  	useExisting: forwardRef(() => TextareaEditComponent),
  	multi: true
};


@Component({
  selector: 'textarea-edit',
  templateUrl: './textarea-edit.component.html',
  styleUrls: ['./textarea-edit.component.css'],
  providers: [CUSTOM_CONTROL_VALUE_ACCESSOR]

})
export class TextareaEditComponent implements ControlValueAccessor {

   @ViewChild('textareaEditControl') textareaEditControl; // textarea DOM element


  //Inputs are set from the parent.
  @Input() label: string = '';   
  @Input() required: boolean = false; 
  @Input() disabled: boolean = false; 


  private _value: string = ''; 
  private preValue: string = ''; 
  private editing: boolean = false;
  
  //Register to note events.
  public onChange: any = Function.prototype; 
  public onTouched: any = Function.prototype; 
  public onDirty: any = Function.prototype;

  // Control Value Accessors for ngModel
  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.onDirty(v);
    }
  }

  // Allows us to update the internal model with "INCOMING" values
  // Reads the ngModel data bindings
  writeValue(value: any) {
    this._value = value;
  }

  // When something changes, let the outside world know
  // that the model has changed...
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // From ControlValueAccessor interface
  // Allows our component to speak to the outside world
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public registerOnDirty(fn: () =>{}): void{
    this.onDirty = fn;
    
  }

  private _processHints() {
      //do this later... hook into label hints... to make nice <3

  }

 
  // Do stuff when the input element loses focus
  onBlur($event: Event) {
    this.editing = false;

  }

  // Start the editting process for the input element
  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins    
    setTimeout(_ => this._renderer.invokeElementMethod(this.textareaEditControl.nativeElement, 'select', []));    

  }
  constructor(element: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {

  //this._renderer.invokeElementMethod(this.inlineEditControl, 'focus' []);
  }

}
