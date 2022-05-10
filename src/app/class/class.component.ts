import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  template: '<h1>{{title}}</h1>',
  styles: ['h1 { color: green; font-size: 350%}']
})
export class ClassComponent implements OnInit {

  componentName="Class"

  title='Class';

  constructor() { }

  ngOnInit(): void {
  }
  Addition(x: number,y: number){
    return x+y
  }

  Substraction(x: number,y: number){
    return x-y
  }
  
}


