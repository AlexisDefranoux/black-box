import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../models/device';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DevicesService {

  private urlService = 'http://127.0.0.1:1880/captor';

  constructor(private http: HttpClient) { }

  /** POST: add a new place to the server */
  giveCaptor(device: Device): Observable<Device> {
    return this.http.post<Device>(this.urlService, device, httpOptions);
  }
}
