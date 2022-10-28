import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { MenuModule } from '../componentes/menu/menu.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    MenuModule
  ]
})
export class ProdutosModule { }
