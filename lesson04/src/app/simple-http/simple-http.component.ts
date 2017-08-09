import { Component, OnInit } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: "simple-http",
  templateUrl: "./simple-http.component.html",
  styleUrls: ["./simple-http.component.css"]
})
export class SimpleHttpComponent implements OnInit {
  public loading: boolean;
  public data: object;
  //注入Http服务
  constructor(public http: Http) {}

  makeRequest(): void {
    this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1").subscribe(
      (res: Response) => {
        this.data = res.json();
        this.loading = false;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log("An error occurred:", err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
        }
      }
    );
  }
  ngOnInit() {}
}
