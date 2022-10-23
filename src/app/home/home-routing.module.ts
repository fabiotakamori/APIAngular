import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: ProdutoComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
