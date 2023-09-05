import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambiarcolorService {
  public colorOscuro = false;
  constructor() { }

  cambiarcolor(){
    this.colorOscuro=!this.colorOscuro;
    console.log(this.colorOscuro);
  }
  
}
