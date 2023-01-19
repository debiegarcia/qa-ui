import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateQuestion } from 'src/app/models/create-question.model';
import { Question } from 'src/app/models/questions.model';
import { User } from 'src/app/models/users.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private router: Router, private question: QuestionsService) { }

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: new Date()
  };

  addQuestionRequest: CreateQuestion = {
    id: 0,
    title: '',
    description: '',
    likes: 0,  
  };

  ngOnInit(): void {
  }

  addQuestionMethod() {
    this.question.addQuestion(this.addQuestionRequest, 1)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }



}
