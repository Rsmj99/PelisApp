import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


//Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
