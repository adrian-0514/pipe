import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {

  public img = new Promise((resolve,reject)=>{
resolve('https://www.elcarrocolombiano.com/wp-content/uploads/2023/01/20230110-VENTAS-DE-AUTOS-DE-LUJO-2022-PORTADA.jpg')
  })

}
