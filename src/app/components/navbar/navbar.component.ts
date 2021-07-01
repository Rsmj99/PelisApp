import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  buscarPelicula(texto:string) {
    if (texto.length == 0) {
      return;
    }
    this._router.navigate(['buscar',texto]); //Como el navbar está fuera del routerLink entonces podemos poner buscar sin la /
  }

}
