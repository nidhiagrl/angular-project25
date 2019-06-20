import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
zoom: number = 4;
 
  // initial center position for the map
   lat:number=33.4484;
   lng:number=-112.0740;
  //  bounds :LatLngLiteral[]= [
  //    { lat:43.473424,
  // lng:-3.782104},
  // { lat: 43.476747, lng: -3.777473 }]
  
   
  bounds: LatLngLiteral[]=[
    { lat: 33.4484, lng: -112.0740 },//Phoenix,Arizona
    { lat: 33.0370, lng: -117.2920 },//Encinitas,California
    { lat: 47.6062, lng: -122.3321 },//Seattle,Washington
    { lat: 33.3062, lng: -111.8413 },//Chandler,Arizona
    { lat: 32.7767, lng:-96.7970 },//Dallas,Texas
    { lat: 28.5383, lng: -81.3792 }//Orlando,Florida
    
    
  ];
  constructor() { }

  ngOnInit() {
  }

}