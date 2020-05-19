import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  
  constructor(public datePipe: DatePipe){}
  maxDate =this.datePipe.transform(new Date(),"yyyy-MM-dd");    
}
