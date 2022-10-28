import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/rquisicao/requisicao.service';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  chave:string =''
  produtos: any[] = []

  constructor(private reqService: RequisicaoService, private authService: AutenticacaoService, private router:Router, private coockie: CookieService) {
    this.chave = this.coockie.get('access_token') 
    this.listar_produto() 
  }

  ngOnInit(): void {
  }

  listar_produto(){
    this.reqService.listarProdutos(this.chave).subscribe((response)=>{
      this.produtos = response.Products
      //console.log(response.Products[1].ProductImage[0])
      console.log(response.Products[0])
      console.log(response.Products)
    },(error)=>{
      console.log(error)
    })
  }

}
