import { Component, OnInit } from "@angular/core";
import { Filme } from "../model/filme";
import { FilmesService } from "../model/filmes.service";
import { Genero } from "../model/genero";

@Component({
  selector: "app-pagina-adicionar-favoritos",
  templateUrl: "./pagina-adicionar-favoritos.component.html",
  styleUrls: ["./pagina-adicionar-favoritos.component.css"]
})
export class PaginaAdicionarFavoritosComponent implements OnInit {
  nome: string;
  URL_FILME_IMAGE: string;
  filmePesquisa: Filme[];
  generosFilme: Genero[];
  imageFail: string;

  constructor(private filme: FilmesService) {
    this.nome = "";
    this.filmePesquisa = [];
    this.generosFilme = [];
    this.URL_FILME_IMAGE = this.filme.obterURLImagem();
  }

  ngOnInit() {
    this.consultarGenerosFilme();
    this.imageFail = "https://static.thenounproject.com/png/556270-200.png";
  }

  consultarFilmesPesquisa(): void {
    this.filme.obterFilmesPesquisa(this.nome).subscribe(res => {
      this.filmePesquisa = res.results;
    });
  }

  consultarGenerosFilme(): void {
    this.filme.obterGeneroFilmes().subscribe(res => {
      this.generosFilme = res.genres;
    });
  }

  generoFilme(id: number): string {
    return this.generosFilme.filter(gen => gen.id == id)[0].name;
  }

  onImgError(event: any): void {
    event.target.src = this.imageFail;
    event.target.style = "height: 374px;";
  }

  adicionarFilmeFavoritos(filme: Filme) {
    console.log(filme);
  }
}
