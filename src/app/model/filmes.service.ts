import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FilmesService {
  readonly chave: string = "api_key=9ddb26d8fb078b266794107cd251f1c7";
  readonly BASE_URL: string = "https://api.themoviedb.org/3";
  readonly IMAGE_URL: string = "https://image.tmdb.org/t/p/original";
  readonly linguagem: string = "language=pt-BR";
  readonly regiao: string = "region=BR";
  constructor(private http: HttpClient) {}

  obterFilmesTendenciaSemana(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/trending/movie/week?${this.chave}&${this.linguagem}&${
        this.regiao
      }`
    );
  }

  obterFilmeMaisVotado(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/movie/top_rated?${this.chave}&${
        this.linguagem
      }&page=1&${this.regiao}`
    );
  }

  obterGeneroFilmes(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/genre/movie/list?${this.chave}&${this.linguagem}`
    );
  }

  obterFilmesPesquisa(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/search/movie?${this.chave}&${this.linguagem}&${
        this.regiao
      }&page=1&include_adult=false&query=${query}`
    );
  }

  obterURLImagem(): string {
    return this.IMAGE_URL;
  }
}
