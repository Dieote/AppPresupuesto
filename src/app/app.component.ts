import { EgresoServicio } from './egreso/egreso.servicio';
import { Egreso } from './egreso/egreso.model';
import { Ingreso } from './ingreso/ingreso.model';
import { Component } from '@angular/core';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos: Ingreso [] = [];
  egresos: Egreso [] = [];

  constructor(private ingresoServico: IngresoServicio,
              private egresoServicio: EgresoServicio
              ){
                this.ingresos = ingresoServico.ingresos;
                this.egresos = egresoServicio.egresos;
              }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;  //suma del arreglo
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egresos => {
      egresoTotal += egresos.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
