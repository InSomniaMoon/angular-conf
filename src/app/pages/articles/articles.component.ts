import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private articles!: Observable<Article[]>

  constructor(private $articles: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.$articles.getArticles()
  }

  /**
   * getArticles
   */
  public getArticles() {
    return this.articles;
  }

}
