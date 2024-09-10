import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';

import { CitasComponent } from './Components/citas/citas.component';
import { CabelloComponent } from './Components/citas/cabello/cabello.component';
import { BarbaComponent } from './Components/citas/barba/barba.component';
import { InfantilComponent } from './Components/citas/infantil/infantil.component';

import { EstilosComponent } from './Components/estilos/estilos.component';
import { AcercadeComponent } from './Components/acercade/acercade.component';

const app_routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Citas', component: CitasComponent },
  { path: 'Corte-de-Cabello', component: CabelloComponent },
  { path: 'Corte-de-Barba', component: BarbaComponent },
  { path: 'Corte-Infantil', component: InfantilComponent },
  { path: 'Conoce-tu-estilo', component: EstilosComponent },
  { path: 'Acerca-de', component: AcercadeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];
export const app_routing = RouterModule.forRoot(app_routes, { scrollPositionRestoration: 'top' }); 
/* 
export const app_routing = RouterModule.forRoot(app_routes);
⚠️⚠️⚠️⚠️Poner esta linea de codigo al terminar el proyecto⚠️⚠️⚠️⚠️
*/
