import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAgularComponent } from './pipes-agular/pipes-agular.component';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';



@NgModule({
  declarations: [
    PipesAgularComponent,
    TextoComponent,
    NumeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PipesAgularComponent]
})
export class PipesModule { }
