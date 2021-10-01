import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-fragment',
  templateUrl: './article-fragment.component.html',
  styleUrls: ['./article-fragment.component.css']
})
export class ArticleFragmentComponent implements OnInit {

  @Input("article") article: Article = new Article();

  constructor() { }

  ngOnInit(): void {
  }

}
