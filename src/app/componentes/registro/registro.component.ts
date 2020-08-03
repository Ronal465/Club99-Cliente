import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
// '../login/login.component.scss'
export class RegistroComponent implements OnInit {


  public steps = 1;
  constructor() { }

  ngOnInit(): void {
  }

  stepsfunction(step): void {
    if (step==0) {
      if (this.steps ==1) {
        
      }else {
        this.steps--
      }
    }
    if (step == 1) {
      if (this.steps ==4) {
        
      }else {
        this.steps++
      }
    }

  }

}
