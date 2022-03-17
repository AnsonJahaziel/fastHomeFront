import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  houses: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHouses().subscribe(res => {
      console.log("Res", res)
      this.houses = res;
    })
  }

  getHouses() {
    return this.http
      .get("../assets/files/houses.json")
      .pipe(
        map((res: any) => {
          return res.data
        })
      )
  }
}
