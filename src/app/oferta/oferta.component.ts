import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CarrinhoService } from 'app/carrinho.service';
import { OfertasService } from "app/ofertas.services";
import { Oferta } from "app/shared/oferta.model";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public ofertas: Oferta;
  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOfertasPorId(parametros.id)
        .then((ofertas: Oferta) => {
          this.ofertas = ofertas;
        });
    });
  }

  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(this.ofertas);
    console.log(this.carrinhoService.exibirItens());
  }
}
