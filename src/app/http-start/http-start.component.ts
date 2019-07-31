import { PostService } from './../services/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../model/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-start',
  templateUrl: './http-start.component.html',
  styleUrls: ['./http-start.component.css']
})
export class HttpStartComponent implements OnInit, OnDestroy {

  loadedPosts = [];
  // włściwość do pokazywania ładowania zawartości (Loading...)
  isFetching = false;
  // obsługa błędów (w szablonie)
  error = null;
  // wyrejstrowanie zmiennej typu Subject.
  private errorSubscribe: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    // obsluga błędów przez Subject i postService
    this.errorSubscribe = this.postService.error.subscribe(
      errorMessage => {
        this.error = errorMessage;
      }
    );
    this.FetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSubscribe.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request i dodanie do tablicy
    this.loadedPosts.push(this.postService.crateAndStorePost(postData.title, postData.content));
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
    this.postService.fetchPosts().subscribe(
      (responseData) => {
        this.loadedPosts = responseData;
        this.isFetching = false;
      }
      // jeden ze sposobów obsługi błędów.
      , error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onHandleError() {
    this.error = null;
  }
}
