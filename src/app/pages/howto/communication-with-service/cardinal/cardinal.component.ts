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
    // When the component initializes listen for incomming messages
    this.commonSharedService.currentMessage.subscribe((message) => {
      if (!message || message == '') {
        // We didn't hear a valid message
        return;
      }

      // We heard a valid message
      console.log(`Cardinal heard message '${message}'`);

      // React to the message
      if (message === 'tweet' || message === 'peep' || message === 'td') {
        this.whatIHeard = message;
      } else {
        this.whatIHeard = 'something else';
      }
    });
  }
}
