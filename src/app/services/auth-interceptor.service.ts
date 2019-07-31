import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
  // Interceptor musi być zaimporotowany w app.module.ts w tablicy provides
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: LoggingInterceptorService,
  //     multi: true
  //   },
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true
  //   }
  // ]

  // interceptor - przechwytywanie zapytania i modyfikowanie
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      // skolonowanie ponieważ nie możne modyfikować orginalnego zapytania
      // tylko utworzyc nowe.
    const modifiedRequest = req.clone({
        // dodanie nagłówka do zapytania.
      headers: req.headers.append('Auth', 'xyz')
    });
      // po modyfikacji musi byc puszczony dalej
    return next.handle(modifiedRequest);
  }
}
