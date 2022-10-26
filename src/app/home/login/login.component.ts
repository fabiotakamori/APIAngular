import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { RequisicaoService } from 'src/app/rquisicao/requisicao.service';
import {CookieService} from 'ngx-cookie-service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //A ATRIBUICAO SERÁ FEITA DE FORMA AUTOMATICA, ASSOCIANDO O INPUT A VARIAVEL
  consumer_key =''
  consumer_secret =''
  code = ''
  access_token = ''
  hora: Date = new Date()



  constructor(private authService: AutenticacaoService, private router:Router, private reqService: RequisicaoService, private coockie: CookieService) {
    
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.auntenticar(this.consumer_key, this.consumer_secret, this.code).subscribe((response)=>{
    this.coockie.set('access_token', response.access_token)
    this.router.navigate(['produtos'])
    },(error)=>{
       alert("Chaves inválida")
       console.log(error)
    })
  }

}
