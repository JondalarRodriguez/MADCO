import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { RegistroComponent } from './Paginas/registro/registro.component';
import { InventarioComponent } from './paginas/inventario/inventario.component';
import { VentasComponent } from './Paginas/ventas/ventas.component';
import { ListaPIComponent } from './Paginas/lista-pi/lista-pi.component';
import { SesionComponent } from './Paginas/sesion/sesion.component';
import { EditInventarioComponent } from './Paginas/edit-inventario/edit-inventario.component';
import { EditarPiComponent } from './Paginas/lista-pi/editar-pi/editar-pi.component';



const routes: Routes = [
  {path: "", component: PrincipalComponent},
  {path: "Registro", component: RegistroComponent},
  {path: "Inventario", component: InventarioComponent},
  {path: "Ventas", component: VentasComponent},
  {path: "PI", component: ListaPIComponent},
  {path: "sesion", component: SesionComponent},
  {path: "editInventario", component: EditInventarioComponent},
  {path: "editarPi", component: EditarPiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
