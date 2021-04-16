import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sesion: string;

  constructor() {
    
   }

  ngOnInit() {

    if(sessionStorage.getItem('sesion') == null){

      sessionStorage.setItem('sesion','0');

    }
    this.sesion = sessionStorage.getItem('sesion');
    console.log('sesion: ',this.sesion);
  }

  private saliendo(form: NgForm){
    sessionStorage.setItem('sesion','0');
    location.reload();
  }


}
