import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getPosts(){
    this.httpService.getPosts().subscribe(posts =>{
      console.log(posts);
    });
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

  deletePost(){}

  updatePost(){}

  changePost(){
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis'
    }) 
  }
}


export interface Post {
  userID?: number;
  id?: number;
  title?: string;
  body?: string;
}