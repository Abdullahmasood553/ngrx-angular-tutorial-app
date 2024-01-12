import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://127.0.0.1:8000/api/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
