import { Component, OnInit } from "@angular/core";
import { Filme } from "../model/filme";
import { FilmesService } from "../model/filmes.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Genero } from "../model/genero";

@Component({
  selector: "app-pagina-inicio",
  templateUrl: "./pagina-inicio.component.html",
  styleUrls: ["./pagina-inicio.component.css"],
  providers: [NgbCarouselConfig]
})
export class PaginaInicioComponent implements OnInit {
  URL_FILME_IMAGE: string;
  filmeTendenciaSemana: Filme[];
  generosFilme: Genero[];
  imageFail: string;

  constructor(private filme: FilmesService, config: NgbCarouselConfig) {
    this.filmeTendenciaSemana = [];
    this.generosFilme = [];
    this.URL_FILME_IMAGE = this.filme.obterURLImagem();

    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.consultarFilmesTendenciaSemana();
    this.consultarGenerosFilme();
    this.imageFail =
      "https://www.drclaudioeduardo.com.br/images/icon-depoimento.png";
  }

  consultarFilmesTendenciaSemana(): void {
    this.filme.obterFilmesTendenciaSemana().subscribe(res => {
      this.filmeTendenciaSemana = res.results;
    });
  }

  consultarGenerosFilme(): void {
    this.filme.obterGeneroFilmes().subscribe(res => {
      this.generosFilme = res.genres;
    });
  }

  generoFilme(id: number):string{
    return this.generosFilme.filter(gen => gen.id == id)[0].name;
  }

  onImgError(event: any): void {
    event.target.src = this.imageFail;
  }

  adicionarFilmeFavoritos(filme: Filme) {
    console.log(filme);
  }
}
