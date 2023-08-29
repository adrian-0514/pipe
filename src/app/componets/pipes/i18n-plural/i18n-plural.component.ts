import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent {

  public contador=0;
  public contado=0;
  public map={
    '=0': 'no tiene valor',
    '=1': 'el valor es de (#)',
    '=2': 'el valor es mayor a 1 y es de (#)',
    'other':'el valor supero al 2, es de (#) '
  }

  aumentar(){
    this.contador++;
  }
  disminuir(){

  }

}
