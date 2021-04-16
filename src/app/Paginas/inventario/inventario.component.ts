import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from 'src/app/Servicios/inventario.service';
import { InventarioModel } from 'src/app/Modelos/InventarioModel';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  Productos : InventarioModel[];

  constructor(private service: InventarioService ,private router: Router) { }

  ngOnInit() {
    this.accesValidate();
    this.getInventario();
  }

  private accesValidate(){
  
    if(sessionStorage.getItem('sesion') == "0"){
      this.router.navigate([''])
    }
  }

  public getInventario(){
    this.service.getInventario().subscribe(data =>{
      this.Productos = data;
    });
  }

  public agregandoProducto(form: NgForm){

    if (form.value.NombreProducto != "" && form.value.PrecioProducto != "" 
      && form.value.CostoProducto != "" && form.value.Stock != ""){
        this.service.agregarProducto(form.value.NombreProducto, form.value.CostoProducto,
          form.value.PrecioProducto, form.value.Stock).subscribe(data =>{
            console.log(data);
            location.reload();
          },
          error =>{
            console.log(error);
            
          });
      }else {
        alert("Complete todos los campos");
      }

  }

  
  private editando(form: NgForm) {
    
    if(form.value.productNameSearch != ""){
    for (var i = 0; i < this.Productos.length; i++) {

      var valorStringName = this.Productos[i].nombreproducto;
      
      if(form.value.productNameSearch == valorStringName){

        sessionStorage.setItem('Product', JSON.stringify(this.Productos[i]) );
      
        
        
        
        console.log(sessionStorage.getItem('Product'));
        var modal=document.getElementById("exampleModalEditar");
        modal.style.display="none"
        this.router.navigate(['/editInventario']);
        
        
        
        break;
      }


      
    }
  }else{
    alert("Ingrese Nombre del producto a Buscar");
  }
}

  

}
