import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event:any){

    console.log(event.detail.value);
    console.log(event.detail.value);
  }

}
