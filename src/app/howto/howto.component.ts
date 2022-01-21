import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css'],
})
export class HowtoComponent implements OnInit {
  selectedHowTo = '';

  constructor() {}

  ngOnInit() {}

  selectHowto(event: any) {
    // console.log(event.target.selectedIndex);
    this.selectedHowTo = event.target.value;
  }
}
