import { Egreso } from './egreso.model';
import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit{

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresoServicio: EgresoServicio){}

  ngOnInit() {
   this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
