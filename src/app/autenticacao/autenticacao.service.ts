import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient:HttpClient) {}
    
  //Observable é como se fosse uma promessa é um objeto de quando a requisição completar, ele retorna o objeto definido dentro do observable
  auntenticar(consumer:string , secret:string, c:string): Observable<any>{
      //url,corpo
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        })
      };

      console.log(consumer, secret, c )
      return this.httpClient.post('https://mirai.commercesuite.com.br/web_api/auth', {
         consumer_key:consumer,
         consumer_secret:secret,
         code:c
      }, httpOptions);
    
    }

  
}
