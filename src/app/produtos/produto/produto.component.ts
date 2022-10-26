import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/rquisicao/requisicao.service';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})


export class ProdutoComponent implements OnInit {
  nome:string =''
  descricao:string =''
  preco:number = 0
  estoque:number = 0
  categoria:number =0
  imagem:string =''
  chave:string =''
  
  constructor(private reqService: RequisicaoService, private authService: AutenticacaoService, private router:Router, private coockie: CookieService) {
    this.chave = this.coockie.get('access_token')  
  }

  ngOnInit(): void {
    
  }

  cadastrar_produto(){
    this.reqService.cadastrarProduto(this.nome, this.descricao, this.preco, this.estoque, this.categoria, this.imagem, this.chave).subscribe((response)=>{
        console.log(response)
        alert("Produto Criado com sucesso")
    },(error)=>{
      
       console.log(error)
    })
   
  }
}
