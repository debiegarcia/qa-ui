import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from '../models/questions.model';
import { Observable } from 'rxjs/internal/Observable';
import { CreateQuestion } from '../models/create-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseApiUrl + '/api/v1/questions');
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(this.baseApiUrl + '/api/v1/questions/' + id);
  }

  getQuestionsByTitle(title: string): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseApiUrl + '/api/v1/questions/title/' + title);
  }

  addQuestion(question: CreateQuestion, userId: number): Observable<CreateQuestion> {
    return this.http.post<CreateQuestion>(this.baseApiUrl + '/api/v1/questions/user/' + userId, question);
  }


      
}

