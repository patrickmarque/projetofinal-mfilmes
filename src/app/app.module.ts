import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FilmesService } from "./model/filmes.service";
import { RoutingModule } from "./routing/routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PaginaInicioComponent } from "./pagina-inicio/pagina-inicio.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { PaginaRodapeComponent } from "./pagina-rodape/pagina-rodape.component";
import { PaginaAdicionarFavoritosComponent } from "./pagina-adicionar-favoritos/pagina-adicionar-favoritos.component";
import { PaginaRemoverFavoritosComponent } from "./pagina-remover-favoritos/pagina-remover-favoritos.component";
import { PaginaSobreComponent } from "./pagina-sobre/pagina-sobre.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PaginaInicioComponent,
    PaginaNaoEncontradaComponent,
    PaginaRodapeComponent,
    PaginaAdicionarFavoritosComponent,
    PaginaRemoverFavoritosComponent,
    PaginaSobreComponent
  ],
  bootstrap: [AppComponent],
  providers: [FilmesService]
})
export class AppModule {}
