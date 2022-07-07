import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-api-calls',
  templateUrl: './http-api-calls.component.html',
  styleUrls: ['./http-api-calls.component.css'],
})
export class HttpApiCallsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(`In ngOnInit`);

    let httpOptions = {
      responseType: 'text',
    };

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    this.http
      .get(url, {
        responseType: 'text',
        observe: 'response',
      })
      .subscribe((data) => {
        console.log(`In get.subscribe`);

        console.log(data.body);
      });
  }
}
