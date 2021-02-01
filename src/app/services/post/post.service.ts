import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Post} from "../../models/Post";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) { }

  getPostByUserId(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${id}`);
  }
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
}
