import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

tipo:string="ingresoOperacion";
descripcionInput: string;
valorInput: number;

constructor(private ingresoServicio: IngresoServicio,
            private egresoServicio: EgresoServicio){}
/* siguiendo la guia nos marca error en el evento.
  tipoOperacion(evento){
    this.tipo = evento.target.value; //accedemos al valor del select
  }
*/
tipoOperacion(evento:Event){
  this.tipo=(evento.target as HTMLInputElement).value;
}


  agregarValor(){
  if(this.tipo === "ingresoOperacion")
  this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
  else
  this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
}
}
