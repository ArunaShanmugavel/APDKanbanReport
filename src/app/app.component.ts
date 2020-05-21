import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'KanbanReport';
  constructor(private excelService:ExcelService,public datePipe: DatePipe){}
  maxDate =this.datePipe.transform(new Date(),"yyyy-MM-dd"); 
  data: any = [
  {
  eid: '101',
  ename: 'Hari',
  esal: 1000
  },
  {
  eid: '102',
  ename: 'Aruna',
  esal: 2000
  },
  {
  eid: '103',
  ename: 'Sowjanya',
  esal: 3000
  },
  {
  eid: '104',
  ename: 'Palani',
  esal: 3000
  }];

exportAsXLSX():void {
   this.excelService.exportAsExcelFile(this.data, 'Sample');
}
}
