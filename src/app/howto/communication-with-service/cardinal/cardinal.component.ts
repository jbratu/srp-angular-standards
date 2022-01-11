import { Component, OnInit } from '@angular/core';
import { ComponentCommonSharedService } from '../component-common-shared.service';

@Component({
  selector: 'app-cardinal',
  templateUrl: './cardinal.component.html',
  styleUrls: ['./cardinal.component.css'],
})
export class CardinalComponent implements OnInit {
  whatIHeard = 'nothing';

  constructor(private commonSharedService: ComponentCommonSharedService) {}

  ngOnInit() {
    this.commonSharedService.currentMessage.subscribe((message) => {
      if (!message || message == '') {
        return;
      }

      console.log(`Cardinal heard message '${message}'`);

      if (message === 'tweet' || message === 'peep' || message === 'td') {
        this.whatIHeard = message;
      } else {
        this.whatIHeard = 'something else';
      }
    });
  }
}
