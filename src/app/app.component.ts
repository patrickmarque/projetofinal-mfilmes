import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  linkNav: string =
    "https://c0.klipartz.com/pngpicture/725/684/gratis-png-tiempo-de-pelicula-pelicula-grafica-logotipo-de-cine-elementos-de-la-pelicula.png";
  isCollapsed: boolean = true;
  name = "Angular " + VERSION.major;
}
