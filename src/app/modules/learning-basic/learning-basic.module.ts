import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components Routing
import { LearningBasicRoutingModule } from './learning-basic-routing.module';
import { AngularComponent } from './components/angular/angular.component';
import { ReactjsComponent } from './components/reactjs/reactjs.component';

@NgModule({
  imports: [CommonModule, LearningBasicRoutingModule],
  declarations: [AngularComponent, ReactjsComponent],
})
export class LearningBasicModule {}
