import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionsListComponent } from './components/questions/questions-list/questions-list.component';
import { RepliesListComponent } from './components/replies-list/replies-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsListComponent
  },
  {
    path: 'home',
    component: QuestionsListComponent
  },
  {
    path: 'questions/add',
    component: AddQuestionComponent
  },
  {
    path: 'question/:id/replies',
    component: RepliesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
