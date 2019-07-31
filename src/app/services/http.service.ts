import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Post } from '../http/http.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private postsList = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsList.asObservable();

  constructor(private http: HttpClient) {
    this.getPosts();
   }

  getPosts() { // : Observable<HttpResponse<Response>>
    this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/').subscribe(
      posts => {
        this.postsList.next(posts);
      },
      err => {
        console.log(err);
      }
    );
    // return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
    //  return this.http.get<Response>
    //   ('https://jsonplaceholder.typicode.com/posts',
    //   {observe: 'response'});

  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }


  getPostByUser(userId: string): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId);
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param});
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>
      ('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>
      ('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
     }

}
