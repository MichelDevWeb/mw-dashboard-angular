import { Component, OnInit } from '@angular/core';

import { ITopic } from '../../models/ITopic.model';
import { LearningBasicService } from '../../services/learning-basic.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  providers: [LearningBasicService],
})
export class AngularComponent implements OnInit {
  topics: ITopic[] = [];

  constructor(private learningBasicService: LearningBasicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.learningBasicService
      .getAngularTopics()
      .subscribe((res) => (this.topics = res as ITopic[]));
  }
}
