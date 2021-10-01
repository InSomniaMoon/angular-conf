import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from 'src/app/pages/article/article.component';
import { ArticleFragmentComponent } from 'src/app/components/article-fragment/article-fragment.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    ArticleFragmentComponent
  ],
  imports: [
    ArticlesRoutingModule,
    CommonModule,
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule {
}