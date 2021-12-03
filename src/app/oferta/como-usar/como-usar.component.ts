import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfertasService } from "app/ofertas.services";

@Component({
  selector: "app-como-usar",
  templateUrl: "./como-usar.component.html",
  styleUrls: ["./como-usar.component.css"],
  providers: [OfertasService],
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = "";
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getComoUsarOfertasPorId(parametros.id)
        .then((resposta: string) => {
          this.comoUsar = resposta;
        })
        .catch((param: any) => {
          console.log(param);
        });
    });
  }
}
