import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MapService {

  constructor(private http: HttpClient) { }


getLatLng(item): Observable<object>{
  let configUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC25O08KtX56PXgfECm-LJ26_Jz5HSqc7Q&address=';
  configUrl=configUrl+item.city+','+item.state;
  //console.log("here"+configUrl);
  return this.http.get(configUrl);
}
}