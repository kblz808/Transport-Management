import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Transporter } from 'src/app/company/models/transporter.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() cols: any[] = [];
  @Input() data:Transporter[] = [];

  @Output() actionEdit = new EventEmitter<Transporter>();


  constructor() {}

  ngOnInit(): void {}

  clicked(data: Transporter){
    this.actionEdit.emit(data);
    
  }

}
