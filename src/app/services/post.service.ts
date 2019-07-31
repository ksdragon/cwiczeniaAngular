import { Post } from './../model/post.model';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
@Injectable({providedIn: 'root'})

export class PostService {
  constructor(private http: HttpClient) {}

  // zmienna do obsługi błędów
  error = new Subject<string>();

  crateAndStorePost(title: string, content: string) {
     const postData: Post = { title, content};
     this.http
      // typ obiektu jaki dostejemy z serwera - trzeba zobaczyć w konsoli w przeglądarce
      .post<{ name: string}>(
        'https://angular-cwiczenia.firebaseio.com/posts.json',
        postData,
        { // obiekt który daje nam możliwość otrzymania całej odpowiedzi nie tylko dane, nagówek, czy status.
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
        postData.id = responseData.body.name;
        // rejestrowanie błędu
      }, error => {
        this.error.next(error.message);
      });
     return postData;
  }

  fetchPosts() {
    let searchParam = new HttpParams();
    searchParam =  searchParam.append('print', 'pretty');
    searchParam =  searchParam.append('custom', 'key');
    return this.http.get<{[key: string]: Post}>('https://angular-cwiczenia.firebaseio.com/posts.json',
      { // własny nagłówek w zapytniu.
        headers: new HttpHeaders({'Custom-Header': 'Hello' }),
        // dodawanie parametrów do zapytania
        // params: new HttpParams().set('print', 'pretty')  // zamiast tego można przekazać searchParam
        params: searchParam,
        responseType: 'json' // domyślne formatownie odpowiedzie z serwera
       }
    )
    .pipe(map(
      // typ jaki jest zwracany przez server firebase tablica kluczy typu Post
      (responseDate: {[key: string]: Post}) => {
        // console.log(responseDate);
        const postArray: Post[] = [];
        for (const key in responseDate) {
          if (responseDate.hasOwnProperty(key)) {
            postArray.push({ ...responseDate[key], id: key});
          }
        }
        return postArray;
      }
    ));
      // jeden ze sposobów obsługi błędów
    catchError ( errorRes => {
      // send to analytics server;
      return throwError(errorRes);
    });
  }

  deletePosts() {
    return this.http.delete('https://angular-cwiczenia.firebaseio.com/posts.json',
      {
        observe: 'events',
        // responseType: 'text' // możesz używać jak ma być sformatowana odpoweidz
      }
    ).pipe(tap( // operator tap z  rxjs/operators umożliwia wykonanie jakegoś kodu nie zmieniając odpowiedzi na zapytanie
      event => { // przydatnie jak chcemy jeszce coś wykonać niezależnie od odpowiedzi.
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
        if (event.type === HttpEventType.Sent) {
          // ...
        }
      }
    )
    );
  }
}
