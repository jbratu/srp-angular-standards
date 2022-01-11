import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentCommonSharedService {
  public editDataDetails: any = [];
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    console.log(`Change message received: ${message}`);
    this.messageSource.next(message);
  }
}
