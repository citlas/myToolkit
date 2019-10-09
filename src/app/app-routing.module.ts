import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolkitComponent } from './toolkit/toolkit.component';
import { LearnedComponent } from './learned/learned.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/portfolio', pathMatch:'full'},
  {path:'toolkit', component: ToolkitComponent},
  {path:'learned', component: LearnedComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ToolkitComponent,LearnedComponent,PortfolioComponent,PageNotFoundComponent]