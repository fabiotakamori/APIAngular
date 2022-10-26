import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//retorna uma promesse por isso usamos then, import função do ES6
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'produtos',
    loadChildren: ()=> import('./produtos/produtos.module').then((m) => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 