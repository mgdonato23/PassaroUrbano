import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfertasService } from "app/ofertas.services";

@Component({
  selector: "app-onde-fica",
  templateUrl: "./onde-fica.component.html",
  styleUrls: ["./onde-fica.component.css"],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = "";
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOndeFicaOfertasPorId(parametros.id)
        .then((resposta: string) => {
          this.ondeFica = resposta;
        })
        .catch((param: any) => {
          console.log(param);
        });
    });
  }
}
