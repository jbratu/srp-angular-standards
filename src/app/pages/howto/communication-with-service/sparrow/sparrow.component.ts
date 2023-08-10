import { Component, OnInit } from '@angular/core';
import { ComponentCommonSharedService } from '../component-common-shared.service';
@Component({
  selector: 'app-sparrow',
  templateUrl: './sparrow.component.html',
  styleUrls: ['./sparrow.component.css'],
})
export class SparrowComponent implements OnInit {
  constructor(private commonSharedService: ComponentCommonSharedService) {}

  ngOnInit() {}

  makeBirdNoise(e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    this.commonSharedService.changeMessage(e.target.value);
  }
}
