import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent implements OnInit {

  public decimal:number= 2.534624745;
  public porcentaje:number= 0.03;
  public currency:number= 12;


  constructor() { }

  ngOnInit(): void {

}
}
