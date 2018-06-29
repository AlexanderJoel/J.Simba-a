import { Component, ViewChild, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.startGoogleMap();
  }

  startGoogleMap() {
    const mapProp = {
        center: new google.maps.LatLng(-0.261581,-78.516010),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-0.261581,-78.516010),
      animation: google.maps.Animation.DROP,
      title:"Mi Casa"
  });
  
  marker.setMap(this.map);
  }
}
