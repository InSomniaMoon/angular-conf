import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private article!: Observable<Article>;
  constructor(private route: ActivatedRoute, private $article: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.article = this.$article.findArticleById(params.id)
      }
    )
  }

  getArticle() {
    return this.article;
  }

  back() {
    this.router.navigateByUrl("/articles")
  }

}
