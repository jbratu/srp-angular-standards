import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-set-style-from-code',
  templateUrl: './set-style-from-code.component.html',
  styleUrls: ['./set-style-from-code.component.css'],
})
export class SetStyleFromCodeComponent implements OnInit, AfterViewInit {
  @ViewChild('testParagraph') testParagraph: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.testParagraph.nativeElement.style['background-color'] = 'red';
  }

  setClass() {
    this.testParagraph.nativeElement.className = 'my-style';
  }
}
