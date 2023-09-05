import { Component } from '@angular/core';
import { CambiarcolorService } from 'src/app/utility/services/cambiarcolor.service';

@Component({
  selector: 'app-pipecolor',
  templateUrl: './pipecolor.component.html',
  styleUrls: ['./pipecolor.component.css']
})
export class PipecolorComponent {

  constructor(private cambiarcolorService:CambiarcolorService){}

  cambiarcolor(){
    this.cambiarcolorService.cambiarcolor();
  }
  get combioColor(){
    return this.cambiarcolorService.colorOscuro;

  }

}
