import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProdutoComponent } from '../produtos/produto/produto.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule
    
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
