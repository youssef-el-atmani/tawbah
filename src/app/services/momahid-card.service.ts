import { Injectable, OnInit, signal } from '@angular/core';
import { Momahid } from '../models/momahid.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MomahidCardService {
  constructor(private http: HttpClient) {}

  getAlMomahidoun(): Observable<Momahid[]> {
    return this.http.get<Momahid[]>('http://localhost:3000/al-momahidoun');
  }
}
