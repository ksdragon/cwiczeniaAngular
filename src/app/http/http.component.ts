import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  
  allPost$: Observable<Array<Post>>;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getPosts(){
    // this.httpService.getPosts().subscribe(posts =>{
    //   console.log(posts);
    // });
    //this.allPost$ = this.httpService.getPosts();
    this.allPost$ = this.httpService.posts$;
  }


  getPost(){
    this.httpService.getPost(1).subscribe(post =>{
      console.log(post);
    });
  }


  getPostByUser(){
    this.httpService.getPostByUser('1').subscribe(posts =>{
      console.log(posts);
    });
  }
  
  addPost(){
    const p: Post = ({
      id: null,
      userID: 1,
      body: 'zmieniam tylko wpis',
      title: 'zapytanie post'
  });

  this.httpService.addPost(p).subscribe(post => {
    console.log(post);
  });
}

  deletePost(){
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  updatePost(){
    const p: Post = ({
      id: 1,
      userID: 1,
      body: 'zmieniam tylko wpis',
      title: 'zapytanie put'
    });
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    })
  }

  changePost(){
    const p: Post = ({
      id: 1,
      body: 'zapytanie patch'
    });
    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    }); 
  }
}


export interface Post {
  userID?: number;
  id?: number;
  title?: string;
  body?: string;
}