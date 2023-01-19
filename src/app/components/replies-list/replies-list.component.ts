import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateReply } from 'src/app/models/create-reply.model';
import { Question } from 'src/app/models/questions.model';
import { Reply } from 'src/app/models/replies.model';
import { User } from 'src/app/models/users.model';
import { QuestionsService } from 'src/app/services/questions.service';
import { RepliesService } from 'src/app/services/replies.service';

@Component({
  selector: 'app-replies-list',
  templateUrl: './replies-list.component.html',
  styleUrls: ['./replies-list.component.css']
})

export class RepliesListComponent implements OnInit{

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: new Date()
  };

  question: Question = {
    id: 0,
    title: '',
    description: '',
    likes: 0,
    user: this.user,
    createdAt: new Date()
  }

  reply: Reply = {
    id: 0,
    content: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: this.user,
    question: this.question    
  }

  addReplyRequest: CreateReply = {
    id: 0,
    content: '',
  }

  replies: Reply[] = [];

  @ViewChild('myForm', { static: false })
  myForm!: NgForm;

  constructor(private repliesService: RepliesService, private route: ActivatedRoute, private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.getReplies();
    this.getQuestionById();
  }

  getReplies(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

      if(id){
        this.repliesService.getReplies(+id)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.replies = response;
          }
        })            
      }
     }
   })
  }

  getQuestionById(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.questionService.getQuestionById(+id)
          .subscribe({
             next: (response) => {
              console.log(response);
              this.question = response;
            }
          })
        }
      }
    })      
  }

  addReplyMethod() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.repliesService.addReply(this.addReplyRequest, 2, +id)
          .subscribe({
            next: (response) => {
              console.log(response);
              //this.replies.push(response);
              this.getReplies();              
            }
          })
        }
      }
    })
    this.myForm.resetForm();
  }

}
