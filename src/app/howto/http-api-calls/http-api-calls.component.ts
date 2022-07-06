import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-api-calls',
  templateUrl: './http-api-calls.component.html',
  styleUrls: ['./http-api-calls.component.css'],
})
export class HttpApiCallsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(`In ngOnInit`);
    this.http
      .get('https://dev.pathtaken.com/iisstart.htm')
      .subscribe((data) => {
        console.log(`In get.subscribe`);
        console.log(data);
      });
  }
}
