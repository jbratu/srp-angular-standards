import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css'],
})
export class HowtoComponent implements OnInit {
  // Set to the default how-to to show or '' to select.
  //selectedHowTo = 'control-error-message';
  selectedHowTo = '';

  constructor() {}

  ngOnInit() {}

  selectHowto(event: any) {
    // console.log(event.target.selectedIndex);
    this.selectedHowTo = event.target.value;
  }
}
