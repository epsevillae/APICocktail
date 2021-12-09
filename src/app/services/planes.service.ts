import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  API_Planes = environment.API_PLANES;

  constructor(private http: HttpClient) {}

  getPlanes() {
    const httpHeader = new HttpHeaders({
      "Authorization": "ef629513-615d-481f-9002-03ea48bc7865",
    });
    console.log(httpHeader.get("Authorization"));
    
    return this.http.get(this.API_Planes, { headers: httpHeader });
  }
}
