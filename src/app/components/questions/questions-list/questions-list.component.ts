import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/models/questions.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent {

  questions: Question[] = [];
  searchText: string = '';

  constructor(private questionService: QuestionsService) { }
  
  ngOnInit(): void {
    this.questionService.getAllQuestions()
      .subscribe({
         next: (response) => {
          this.questions = response;
        },
        error: (response) => {
          console.log(response);
        }
     })
  }

  Search(){
    if(this.searchText == ''){
      this.ngOnInit();
    } else {
      this.questions = this.questions.filter(res => {
        return res.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      })
    }
  }
 
  

  

}
