import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss']
})
export class TransporterComponent implements OnInit {

  transporters: any[] = [
    {
      code: 0,
      name: '',
      address: '',
      contact_phone: '',
    },
  ];

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  closeDialog(){
    this.display = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
