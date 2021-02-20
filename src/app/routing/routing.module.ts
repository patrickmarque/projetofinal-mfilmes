import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PaginaInicioComponent } from "../pagina-inicio/pagina-inicio.component";
import { PaginaNaoEncontradaComponent } from "../pagina-nao-encontrada/pagina-nao-encontrada.component";
import { PaginaAdicionarFavoritosComponent } from "../pagina-adicionar-favoritos/pagina-adicionar-favoritos.component";
import { PaginaRemoverFavoritosComponent } from "../pagina-remover-favoritos/pagina-remover-favoritos.component";
import { PaginaSobreComponent } from "../pagina-sobre/pagina-sobre.component";

const routes: Routes = [
  { path: "inicio", component: PaginaInicioComponent },
  { path: "adicionar", component: PaginaAdicionarFavoritosComponent },
  { path: "remover", component: PaginaRemoverFavoritosComponent},
  { path: "sobre", component: PaginaSobreComponent},
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}
