import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-fragment-article',
  templateUrl: './article-fragment.component.html',
  styleUrls: ['./article-fragment.component.css']
})
export class ArticleFragmentComponent implements OnInit {

  @Input() article!: Article

  constructor() { }

  ngOnInit(): void {
  }

}
