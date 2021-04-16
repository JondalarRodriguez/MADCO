import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PInternosService } from 'src/app/Servicios/pinternos.service';
import { ProductosInt } from 'src/app/Modelos/ProcuctosInt';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-pi',
  templateUrl: './lista-pi.component.html',
  styleUrls: ['./lista-pi.component.css']
})
export class ListaPIComponent implements OnInit {

  Iproducts: ProductosInt[];

  constructor(private service: PInternosService ,private router: Router) { }

  ngOnInit() {
  this.accesValidate();
  this.getIProducts();
  }
  private accesValidate(){
  
    if(sessionStorage.getItem('sesion') == "0"){
      this.router.navigate([''])
    }
  }

  public getIProducts(){
    this.service.IProducts().subscribe( data =>{
      this.Iproducts = data;
    });
  }

  private editando(form: NgForm) {
    
    if(form.value.productNameSearch != ""){
    for (var i = 0; i < this.Iproducts.length; i++) {

      var valorStringName = this.Iproducts[i].nombrepi;
      
      if(form.value.productNameSearch == valorStringName){

        sessionStorage.setItem('IProduct', JSON.stringify(this.Iproducts[i]) );
      
        
        
        
        console.log(sessionStorage.getItem('IProduct'));
        this.router.navigate(['/editarPi']);

        
        
        break;
      }


      
    }

  }else{
    alert("Ingrese Nombre del producto a Buscar");
  }
}

public agregandoProducto(form: NgForm){

  if (form.value.NombreProducto != "" && form.value.CostoProducto != "" 
    && form.value.fechadecompra != "" && form.value.Stock != ""){
      this.service.agregarProducto(form.value.NombreProducto, form.value.CostoProducto,
        form.value.stock, form.value.fechadecompra).subscribe(data =>{
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


}
