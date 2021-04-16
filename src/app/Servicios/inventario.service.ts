import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InventarioModel } from '../Modelos/InventarioModel';

export const  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  readonly api = 'http://localhost:8041/inventario';

  constructor(private http: HttpClient) {

   }

   public getInventario(){
     return this.http.get<InventarioModel[]>(this.api+"/get");
   }

   public agregarProducto(nombreproducto: string, costoproveedor: number, 
    costoproducto: number, stock: number){
     return this.http.post(this.api+"/post/json", JSON.stringify({nombreproducto, costoproveedor,
       costoproducto, stock}), httpOptions);
   }

   public actualizar(id:number, nombreproducto:string, costoproveedor: number,
    costoproducto: number,stock: number){

      return this.http.put(this.api+"/update/"+id, JSON.stringify({nombreproducto, costoproveedor,
        costoproducto, stock}),httpOptions);

   }

}
