import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.APIUrl;

  private isAuthSubject = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) { }

  public isAuth() { return this.isAuthSubject.asObservable() }

  public signIn(token: string) {
    return this.http.post(`${this.url}/login`, { token }).pipe(
      map((data: any) => {
        this.isAuthSubject.next(true);
        localStorage.setItem("auth_token", token)
        return data
      })
    )
  }

  public logout() {
    return of([]).pipe(
      map(() => {
        this.isAuthSubject.next(true);
        localStorage.removeItem("auth_login");
      })
    )
  }

}
