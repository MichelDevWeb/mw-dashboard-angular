import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { ReactjsComponent } from './components/reactjs/reactjs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Learning Basic',
    },
    children: [
      {
        path: '',
        redirectTo: 'angular',
      },
      {
        path: 'angular',
        component: AngularComponent,
        data: {
          title: 'Angular',
        },
      },
      {
        path: 'reactjs',
        component: ReactjsComponent,
        data: {
          title: 'ReactJS',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningBasicRoutingModule {}

