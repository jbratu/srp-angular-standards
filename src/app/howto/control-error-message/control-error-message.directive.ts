import { Directive, ElementRef, Host, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';

@Directive({
  selector: '[appControlErrorMessage]',
})
export class ControlErrorMessageDirective implements OnInit {
  @Host() private formGroup: FormGroup;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) {}

  ngOnInit() {
    const abstractControl = this.control.control;

    console.log(`appControlErrorMessage onInit`);

    // On create of our directive listen for notification about the validation state of our control
    abstractControl.statusChanges.subscribe((newStatus) => {
      // Get a handle to the control our directive was added too
      const nativeElement = this.el.nativeElement;

      // Now get the parent element of our control and see if we have any error messages in the DOM
      const parentElement = nativeElement.parentNode;
      const errElement = parentElement.querySelector('.attached-error-msg');

      if (parentElement) {
        if (newStatus === 'INVALID') {
          // The control is invalid

          // Was a previous message already on screen? If so, clear it because the new error
          // could be different than the last.
          if (errElement) {
            // We have error elements on display so remove them now
            errElement.remove();
          }

          const errors = this.control.errors;
          const errHTML = `<small class="p-error attached-error-msg">${errors.error}</small>`;
          nativeElement.insertAdjacentHTML('afterend', errHTML);
        } else {
          // The control is valid

          if (errElement) {
            // We have error elements on display so remove them now
            errElement.remove();
          } else {
            // No error elements were displayed on the screen
          }
        }
      }
    });
  }
}
