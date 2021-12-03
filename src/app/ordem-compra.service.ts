import { Pedido } from "./shared/pedido.model";
import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

const URL_API = `http://localhost:3000`;

@Injectable()
export class OrdemCompraService {
  constructor(private http: Http) {}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: Headers = new Headers();
    headers.append("Content-type", "application/json");

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: headers })
    ).map((resposta: Response) => resposta.json().id);
  }
}
