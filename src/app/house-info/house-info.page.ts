import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

declare var google;

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.page.html',
  styleUrls: ['./house-info.page.scss'],
})
export class HouseInfoPage implements OnInit {

  map = null;
  houses: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMaps();
    this.getHouses().subscribe(res => {
      console.log("Res", res)
      this.houses = res;
    });
  }

  getHouses() {
    return this.http
      .get("assets/files/houses.json")
      .pipe(
        map((res: any) => {
          return res.data
        })
      )
  }

  option = {
    slidePerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true

    //AIzaSyDPRgS6_Tj-F6yOLOsLD4qmtOreTpXLncA
  }

  loadMaps() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

}
