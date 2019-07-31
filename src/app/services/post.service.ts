import { Post } from './../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {}


  crateAndStorePost(title: string, content: string) {
     const postData: Post = { title, content};
     this.http
      .post<{ name: string}>(
        'https://angular-cwiczenia.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchPost() {
    return this.http.get<{[key: string]: Post}>('https://angular-cwiczenia.firebaseio.com/posts.json')
    .pipe(map(
      (responseDate: {[key: string]: Post}) => {
        const postArray: Post[] = [];
        for (const key in responseDate) {
          if (responseDate.hasOwnProperty(key)) {
            postArray.push({ ...responseDate[key], id: key});
          }
        }
        return postArray;
      }
    ));
  }

  deletePosts() {
    return this.http.delete('https://angular-cwiczenia.firebaseio.com/posts.json');
  }
}
