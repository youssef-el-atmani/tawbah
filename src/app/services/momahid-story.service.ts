import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Momahid } from '../models/momahid.model';
import { environment } from '../../environments/environment';
@Injectable()
export class MomahidStoryService {
  private apiURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getMomahidounStories(): Observable<Momahid[]> {
    return this.http.get<Momahid[]>(`${this.apiURL}/momahidoun/approved`);
  }
}
