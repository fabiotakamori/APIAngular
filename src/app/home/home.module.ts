import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProdutoComponent } from './produto/produto.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
    
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
