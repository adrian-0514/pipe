import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAgularComponent } from './pipes-agular/pipes-agular.component';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { FechaComponent } from './fecha/fecha.component';
import { JsonComponent } from './json/json.component';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';
import { SliceComponent } from './slice/slice.component';
import { I18nselectComponent } from './i18nselect/i18nselect.component';
import { FormsModule } from '@angular/forms';
import { I18nPluralComponent } from './i18n-plural/i18n-plural.component';



@NgModule({
  declarations: [
    PipesAgularComponent,
    TextoComponent,
    NumeroComponent,
    FechaComponent,
    JsonComponent,
    KeyvalueComponent,
    SliceComponent,
    I18nselectComponent,
    I18nPluralComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PipesAgularComponent]
})
export class PipesModule { }
