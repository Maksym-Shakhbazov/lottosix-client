import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url = '//ec2-52-59-230-187.eu-central-1.compute.amazonaws.com/api/time/';
  public time;

  constructor(private http: Http) {
    this.http = http;
    this.getTime();
  }

  getTime(){

    return this.http.get(this.url)
        .map((res:Response) => res.json())
        .subscribe(
            data => {
              this.time = new Date(data.date || 0)
            },
            err => console.error(err),
            () => console.log('done')
        );
  }
}
