import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

function validatorCustomMessage(c: FormControl) {
  const TARGET_VALUE = 42;

  // console.log(`Validating ${c.value}`);

  const val = c.value;
  const valNumber = Number(val);

  if (valNumber === TARGET_VALUE) {
    // This is valid, return no error
    return null;
  } else {
    // This is not valid so return an error message after figuring out
    // why we it isn't valid.

    if (val === '') {
      return {
        error: `I can't take nothing for an answer.`,
      };
    }

    // Is the user typing a number?
    if (isNaN(valNumber)) {
      // No, not typing a number

      return {
        error: `Looks like you aren't entering a number.`,
      };
      
    } else {
      // User is typing a number

      if (valNumber > TARGET_VALUE) {
        return {
          error: `Your number is higher than it should be.`,
        };
      } else {
        return {
          error: `Your number is lower than it should be.`,
        };
      }
    }

    return {
      error: 'Something not right',
    };
  }
}

@Component({
  selector: 'app-control-error-message',
  templateUrl: './control-error-message.component.html',
})
export class ControlErrorMessageComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      theAnswer: new FormControl('', [validatorCustomMessage]),
    });
  }

  ngAfterViewInit() {}
}
