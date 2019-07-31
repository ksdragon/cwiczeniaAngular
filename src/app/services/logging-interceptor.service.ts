import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing request');
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(
      // wykorzystując transformację przez metodę pipe oraz metodę tap (do wglądu odpowiedzi) możemy zmieniać rónież odpowiedz
      // oraz metodę map do zmianiany odpowiedzi (nie zalecane ale możliwe)
      // w naszym przykładzie sprawdzamy czy odpowieć jest i wypisujemy zawartość.
      // Interceptor musi być zaimporotowany w app.module.ts w tablicy provides
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Incoming response');
          console.log(event.body);
        }
      })
    );
  }
}
