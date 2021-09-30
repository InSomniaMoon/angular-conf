import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from 'src/app/pages/article/article.component';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';
import { CreateArticleComponent } from 'src/app/pages/create-article/create-article.component';

const routes: Routes = [
  { path: "", component: ArticlesComponent },
  { path: "creer", component: CreateArticleComponent },
  { path: ":id", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
