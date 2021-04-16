import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }  from '@angular/common/http';
import { PInternosService } from './Servicios/pinternos.service';
import { InventarioService } from './Servicios/inventario.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Paginas/Parciales/nav/nav.component';
import { FooterComponent } from './Paginas/Parciales/footer/footer.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { RegistroComponent } from './Paginas/registro/registro.component';
import { InventarioComponent } from './paginas/inventario/inventario.component';
import { VentasComponent } from './Paginas/ventas/ventas.component';
import { ListaPIComponent } from './Paginas/lista-pi/lista-pi.component';
import { SesionComponent } from './Paginas/sesion/sesion.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EditInventarioComponent } from './Paginas/edit-inventario/edit-inventario.component';
import { EditarPiComponent } from './Paginas/lista-pi/editar-pi/editar-pi.component';
import { EsteticaComponent } from './Paginas/estetica/estetica.component';
//import { swal } from '@sweetalert/with-react';   



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    RegistroComponent,
    InventarioComponent,
    VentasComponent,
    ListaPIComponent,
    SesionComponent,
    EditInventarioComponent,
    EditarPiComponent,
    EsteticaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
   // swal
  ],
  providers: [PInternosService, InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
