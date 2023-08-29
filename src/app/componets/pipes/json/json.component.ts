import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {

  public persona = {
    nombre:"camilo",
    apelliso:"gonzalez mosquera",
    edad:20,
    direccion:"marquetalia"
  }

}
