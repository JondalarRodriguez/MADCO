import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioModel } from 'src/app/Modelos/InventarioModel';
import { NgForm } from '@angular/forms';
import { InventarioService } from 'src/app/Servicios/inventario.service';

@Component({
  selector: 'app-edit-inventario',
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.css']
})
export class EditInventarioComponent implements OnInit {

  Products: InventarioModel;

  constructor(private service: InventarioService ,private router: Router) { }

  ngOnInit() {
    this.validate();
  }
  
  public validate(){
    if(sessionStorage.getItem('Product') == null ){
      this.router.navigate(['/Inventario']);
    }else{
      this.MandarDatos();
      console.log(sessionStorage.getItem('Product'))
      
    }
  }

  private CerrarModal(){
    var modal = 0;

  }

  public MandarDatos(){

    this.Products = JSON.parse(sessionStorage.getItem('Product'));
    console.log(this.Products);
  }

  private GuardarEdicion(form: NgForm){

    this.service.actualizar(this.Products.id, form.value.NombreProducto, form.value.PrecioProducto, 
      form.value.CostoProducto, form.value.Stock).subscribe(
        data =>{
          this.limpiar();
        },
        error => {
          console.log("Error");
        }
      );

  }

  private limpiar(){
    sessionStorage.removeItem('Product');
    this.router.navigate(['/Inventario']);
  }

}
