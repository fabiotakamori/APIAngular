import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  public chave: string = '';

  constructor(private httpClient:HttpClient) {

  }
  cadastrarProduto(nome:string, descricao:string, preco:number, estoque:number, categoria:number, url:string, access_token:string): Observable<any>{
    
    this.chave = access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      })
    };

    return this.httpClient.post(`https://mirai.commercesuite.com.br/web_api/products?access_token=${this.chave}`, {
         "Product":{
            name:nome,
            description:descricao,
            price:preco,
            stock: estoque,
            category_id: categoria,
            picture_source_1:url
         }
      }, httpOptions);

  }
}
