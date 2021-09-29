import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private url = environment.APIUrl;

  constructor(private http: HttpClient) { }

  /**
   * getArticles
   */
  public getArticles() {
    return this.http.get(`${this.url}/articles`).pipe(
      map((data: any) => data.map(da => da))
    )

  }

}
