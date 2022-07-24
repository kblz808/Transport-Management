import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Transporter } from 'src/app/company/models/transporter.model';

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
