import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateReply } from '../models/create-reply.model';
import { Reply } from '../models/replies.model';

@Injectable({
  providedIn: 'root'
})
export class RepliesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getReplies(id: number): Observable<Reply[]> {
    return this.http.get<Reply[]>(this.baseApiUrl + '/api/v1/replies/question/' + id);
  }

  addReply(reply: CreateReply, userId: number, questionId: number): Observable<Reply> {
    return this.http.post<Reply>(this.baseApiUrl + '/api/v1/replies/question/' + questionId + '/user/' + userId, reply);
  }
}
