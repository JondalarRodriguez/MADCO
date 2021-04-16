import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{PInternosService} from 'src/app/Servicios/pinternos.service';
import { ProductosInt } from 'src/app/Modelos/ProcuctosInt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pi',
  templateUrl: './editar-pi.component.html',
  styleUrls: ['./editar-pi.component.css']
})
export class EditarPiComponent implements OnInit {

  IProducts: ProductosInt;

  constructor(private service: PInternosService, private router: Router ) { }

  ngOnInit() {
    this.validate();
    
  }

  public validate(){
    if(sessionStorage.getItem('IProduct') == null ){
      this.router.navigate(['/PI']);
    }else{
      this.MandarDatos();
      console.log(sessionStorage.getItem('IProduct'))
    }
  }

  public MandarDatos(){

    this.IProducts = JSON.parse(sessionStorage.getItem('IProduct'));
    console.log(this.IProducts);
  }

private GuardarEdicionPi(form: NgForm){

  this.service.actualizar(this.IProducts.id, form.value.NombreProducto, form.value.CostoProducto, 
    form.value.stock, form.value.fechadecompra).subscribe(
      data =>{
        this.limpiar();
      },
      error => {
        console.log("Error");
      }
    );
    }
    private limpiar(){
      sessionStorage.removeItem('IProduct');
      this.router.navigate(['/PI']);
    }
      
    

}
