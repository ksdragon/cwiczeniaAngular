import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../http/http.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<Array<Post>>{
   return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
    //   .map((res: Response) => {
    //     res.json();
    // })
  }
  getPost(id: number): Observable<Post>{
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }


  getPostByUser(userId: string): Observable<Array<Post>>{
    const param = new HttpParams().set('userId', userId);
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param});
  }
  
  addPost(post: Post): Observable<Post> {    
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',post);
  }

  deletePost(){}

  updatePost(){}

  changePost(){
     }

}
