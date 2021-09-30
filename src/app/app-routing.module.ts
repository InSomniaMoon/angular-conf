import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  { path: "connexion", component: ConnexionComponent },
  { path: "articles", canActivate: [AuthGuard], loadChildren: () => import("src/app/modules/articles/articles.module").then(m => m.ArticlesModule) },
  { path: "**", redirectTo: "articles" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
