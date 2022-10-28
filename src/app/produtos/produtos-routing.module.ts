import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: 'cadastro',
    component: ProdutoComponent
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProdutosRoutingModule { }
