import { Component, OnInit } from "@angular/core";
import { OfertasService } from "app/ofertas.services";
import { Oferta } from "app/shared/oferta.model";
import { Observable, Subject } from "rxjs";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  styleUrls: ["./topo.component.css"],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if (termo.trim() === "") {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      })
      .catch((err: any) => {
        console.log(err);
        return Observable.of<Oferta[]>([]);
      });
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next(" ");
  }
}
