import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Observable } from 'rxjs';

import { Transporter } from 'src/app/company/models/transporter.model';
// import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() columns: any;
  @Input() data:Transporter[] = [];

  constructor() {}

  ngOnInit(): void {}

}
