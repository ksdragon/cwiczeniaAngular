import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-http-start',
  templateUrl: './http-start.component.html',
  styleUrls: ['./http-start.component.css']
})
export class HttpStartComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient,
              private postService: PostService) { }

  ngOnInit() {
    this.FetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.crateAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.FetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    );
  }

  private FetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(
      (responseData) => {
        this.loadedPosts = responseData;
        this.isFetching = false;
      }
    );
  }

}
