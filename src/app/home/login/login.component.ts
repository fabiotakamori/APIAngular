import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

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
  
  // Injecção de dep authService = nome, não importa o nome e sim seu tipo que é o service
  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.auntenticar(this.consumer_key, this.consumer_secret, this.code).subscribe(()=>{
      console.log("Autenticação com sucesso")
    //caso de erro
    },(error)=>{
       alert("Chaves inválida")
       console.log(error)
    })
  }

}
