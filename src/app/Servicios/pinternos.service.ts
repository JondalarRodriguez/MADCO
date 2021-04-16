import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductosInt } from '../Modelos/ProcuctosInt';
import { Item } from '../Modelos/fechaPi';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PInternosService {

  readonly api = 'http://localhost:8041/pi';

  constructor(private http: HttpClient) { 

  }

 public IProducts(){
  return this.http.get<ProductosInt[]>(this.api+"/get");
 }

 
 public actualizar(id:number, nombrepi:string, costo: number,
  stock: number,fechadecompra: Item[]){
    console.log(JSON.stringify({nombrepi, costo,
      stock, fechadecompra}));

    return this.http.put(this.api+"/update/"+id, JSON.stringify({nombrepi, costo,
      stock, fechadecompra }),httpOptions);

 }

 public agregarProducto(nombrepi:string, costo: number,
  stock: number,fechadecompra: Item[]){
    console.log(JSON.stringify({nombrepi, costo, 
      stock, fechadecompra}));
   return this.http.post(this.api+"/post/json", JSON.stringify({nombrepi, costo, 
      stock, fechadecompra}), httpOptions);
 }

}
