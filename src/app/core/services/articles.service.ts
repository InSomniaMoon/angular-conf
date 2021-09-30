import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Article } from "src/app/core/models/article";
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = environment.APIUrl;

  constructor(private http: HttpClient) { }

  /**
   * getArticles
   */
  public getArticles() {
    return this.http.get(`${this.url}/articles`).pipe(
      map((data: any) => data.map((a: any) => new Article(a.id, a.nom, a.type, a.description)))
    )
  }

  public findArticleById(id: number) {
    return this.http.get(`${this.url}/articles/${id}`).pipe(
      map((data: any) => {
        console.log(data)
        return data
      }),
      map((data: any) => new Article(data.id, data.nom, data.type, data.description))
    )

  }

}
