import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InfantilComponent } from './Components/citas/infantil/infantil.component';
import { BarbaComponent } from './Components/citas/barba/barba.component';
import { CabelloComponent } from './Components/citas/cabello/cabello.component';
import { AcercadeComponent } from './Components/acercade/acercade.component';
import { EstilosComponent } from './Components/estilos/estilos.component';
import { CitasComponent } from './Components/citas/citas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitasComponent,
    EstilosComponent,
    AcercadeComponent,
    CabelloComponent,
    BarbaComponent,
    InfantilComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
