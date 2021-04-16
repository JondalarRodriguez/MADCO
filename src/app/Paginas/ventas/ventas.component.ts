import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createLoweredSymbol } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { format } from 'util';
import { InventarioService } from 'src/app/Servicios/inventario.service';
import { InventarioModel } from 'src/app/Modelos/InventarioModel';
import { Productos } from 'src/app/Modelos/Productos';


//import { totalmem } from 'os';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  Inventario : InventarioModel[];
  Tabla : Productos;
  
  constructor(private service: InventarioService, private router: Router) { }
  ngOnInit() {
   
    
    this.accesValidate();
    this.getInventario();
   // this.total();
    
  }

  public getInventario(){
    this.service.getInventario().subscribe(data =>{
      this.Inventario = data;
    });
  }

  private accesValidate() {

    if (sessionStorage.getItem('sesion') == "0") {
      this.router.navigate([''])
    }
  }


 
  private enviando(form: NgForm) {

    if(form.value.NombreProducto != ""){
      for (var i = 0; i < this.Inventario.length; i++) {
  
        var valorStringName = this.Inventario[i].nombreproducto;
        
        if(form.value.NombreProducto == valorStringName){
  
          sessionStorage.setItem('Venta', JSON.stringify(this.Inventario[i]) );
          this.guardarDatos();
          
          break;
        }
        
  
        
      }
    }else{
      alert("Ingrese Nombre del producto a Buscar");
    }
  }

  public guardarDatos(){
    this.Tabla = JSON.parse(sessionStorage.getItem('Venta'));
    console.log(this.Tabla);
  }
   // this.total();

    
  
  /*

  private editando(form: NgForm, item: Item) {
    
    
    for (var i = 0; i < this.Predefinido.length; i++) {

      var valorStringName = this.Predefinido[i].name;
      var valorStringPrize = this.Predefinido[i].prize
      if(form.value.productNameSearch == valorStringName){

        sessionStorage.setItem('editable',form.value.productNameSearch);
        sessionStorage.setItem('editPrize', valorStringPrize);

        break;
      }else{
        
        alert("Producto no encontrado");
      }


      
    }
    //this.Items = this.Predefinido[i];
    
    this.productNameEdit = sessionStorage.getItem('editable');
    this.productPrizeEdit = sessionStorage.getItem('editPrize');
    console.log(this.productNameEdit, this.productPrizeEdit);


  }

  
  */

  

  //----------------------------------------------------------------------------------

  private imprimir() {
    // function imprim2(){
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head>');
    mywindow.document.write('<style>.tabla{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.tabla th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:left;font-size:15px;}.tabla td{border:1px solid #ddd;text-align:left;padding:6px;}</style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById('TableProducts').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necesario para IE >= 10
    mywindow.focus(); // necesario para IE >= 10
    mywindow.print();
    mywindow.close();
    return true;

  }
  /*
  private total() {

    for(var i = 0;  i< this.Predefinido.length; i++){
      console.log(this.Predefinido[i].prize);
    }


    var sumaString = "";
    var sumando = 0;
    for (var i = 0; i < this.Predefinido.length; i++) {

      var valorString = this.Predefinido[i].prize;
      var valorNumber = parseInt(valorString);
      console.log(valorString);
      sumando += valorNumber;
    }
    document.querySelectorAll('.Total').forEach(function (total) {
      sumaString = sumando.toString();
      total.innerHTML = sumaString;
    });



    /* document.querySelectorAll('.Total').forEach(function (total) {
       
       var suma = 0;
       document.querySelectorAll('.precio').forEach(function (celda) {
        var valor = parseInt(this.Item.prize);
        suma += valor;
         
       });
       var sumaString = suma.toString();


  } 
private cobrar(){

}


  //-----------------No funciona-------------

 */

}

