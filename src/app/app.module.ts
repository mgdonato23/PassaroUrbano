import { ROUTES } from "./app.routes";

import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { TopoComponent } from "./topo/topo.component";
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { ComoUsarComponent } from "./oferta/como-usar/como-usar.component";
import { OndeFicaComponent } from "./oferta/onde-fica/onde-fica.component";
import { OrdemCompraSucessoComponent } from "./ordem-compra-sucesso/ordem-compra-sucesso.component";
import { OfertaComponent } from "./oferta/oferta.component";
import { OrdemCompraComponent } from "./ordem-compra/ordem-compra.component";

import { DescricaoReduzidaPipe } from "./utils/descricaoReduzida.pipe";

import { CarrinhoService } from "./carrinho.service";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzidaPipe,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }, CarrinhoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
