import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITopic } from '../models/ITopic.model'

@Injectable({
  providedIn: 'root',
})
export class LearningBasicService {
  constructor(private httpClient: HttpClient) {}

    getAngularTopics() {
        return this.httpClient.get('http://localhost:3000/angular') as Observable<ITopic[]>
    }

    getReactJSTopics() {
      return this.httpClient.get('http://localhost:3000/reactjs') as Observable<ITopic[]>
  }
}
