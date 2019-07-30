import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-http-start',
  templateUrl: './http-start.component.html',
  styleUrls: ['./http-start.component.css']
})
export class HttpStartComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string}>(
        'https://angular-cwiczenia.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{[key: string]: Post}>('https://angular-cwiczenia.firebaseio.com/posts.json')
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
    ))
    .subscribe(
      posts => {
        this.loadedPosts = posts;
        console.log(posts);
      }
    );
  }
}
