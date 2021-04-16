import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import  { Reaccionar } from ' reaccionar '   ;
//import { swal } from '@ sweetalert / with-react';   

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
  
})
export class SesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.accesValidate();
  }

private accesValidate(){
  
  if(sessionStorage.getItem('sesion') == "1"){
    this.router.navigate([''])
  }
}



private obteniendo (form: NgForm){

var usuarioReal = "Julieta";

var ContraseñaReal = "admin";


  if (usuarioReal == form.value.username && ContraseñaReal == form.value.userpass){
    sessionStorage.setItem('sesion','1');
    console.log(sessionStorage.getItem('sesion'));
    
    location.reload();


    
    
  }else{
    //swal( "Datos Incorrectos" , "Creo que deberias revisar los datos" , "error" )   ;
    alert("Datos Incorrectos")
    console.log("Datos Incorrectos")
    sessionStorage.setItem('sesion','0');
    console.log(sessionStorage.getItem('sesion'));
    location.reload();
  }
  

  
}

}
