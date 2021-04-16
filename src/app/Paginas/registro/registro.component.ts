import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.accesValidate();
  }
  private accesValidate(){
  
    if(sessionStorage.getItem('sesion') == "0"){
      this.router.navigate([''])
    }
  }

}
