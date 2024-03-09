import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``
})
export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.select("contador").subscribe(contador => {
      this.contador = contador;
    })
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({ numero: 4}));
  }
}
