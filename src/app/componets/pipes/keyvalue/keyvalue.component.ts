import { Component } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent {

  public persona = {
    nombre:"camilo",
    apelliso:"gonzalez mosquera",
    edad:20,
    direccion:"marquetalia"
  }

}
