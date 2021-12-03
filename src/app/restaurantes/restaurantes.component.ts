import { Component, OnInit } from "@angular/core";
import { OfertasService } from "app/ofertas.services";
import { Oferta } from "app/shared/oferta.model";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Oferta[];
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService
      .getOfertasPorCategoria("restaurante")
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      });
  }
}
