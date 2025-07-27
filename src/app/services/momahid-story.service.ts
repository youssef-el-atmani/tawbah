import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Momahid } from '../models/momahid.model';

@Injectable()
export class MomahidStoryService {
  constructor(private http: HttpClient) {}

  getMomahidounStories(): Observable<Momahid[]> {
    return this.http.get<Momahid[]>(
      'http://localhost:3000/momahidoun/approved'
    );
  }
}
