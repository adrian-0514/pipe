import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAgularComponent } from '../pipes-agular/pipes-agular.component';



@NgModule({
  declarations: [
    PipesAgularComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PipesAgularComponent
  ]
})
export class PipesModule { }
