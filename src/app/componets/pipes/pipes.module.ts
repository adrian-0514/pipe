import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAgularComponent } from './pipes-agular/pipes-agular.component';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { FechaComponent } from './fecha/fecha.component';



@NgModule({
  declarations: [
    PipesAgularComponent,
    TextoComponent,
    NumeroComponent,
    FechaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PipesAgularComponent]
})
export class PipesModule { }
