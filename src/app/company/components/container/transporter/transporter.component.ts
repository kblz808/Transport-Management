import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import { TransporterFormComponent } from '../../ui/transporter-form/transporter-form.component';

import { Transporter, EMPTY_TRANSPORTER } from 'src/app/company/models/transporter.model';
import { TransporterService } from 'src/app/company/services/transporter.service';
import { TransporterQuery } from 'src/app/company/state/transporter.query';
import { filter, Observable, switchMap, take } from 'rxjs';
import { AsyncPipe, NgSwitchCase } from '@angular/common';
import { TransporterStore } from 'src/app/company/state/transporter.store';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss'],
  providers: [DialogService]
})
export class TransporterComponent implements OnInit {

  loading = true;
  transporters: Transporter[] = [];

  columns: any[] = [
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'address', header: 'Address'},
    {field: 'contact_phone', header: 'Contact Phone'},
    {field: '_action', header: 'Edit'}

  ];

  constructor(public dialogService: DialogService, private service:TransporterService, private query: TransporterQuery,  private transporterStore: TransporterStore) {}

  ngOnInit(): void {
    this.query.getIsLoading().subscribe(res => this.loading = res);
    this.query.getTodos().subscribe(res => this.transporters = res);

    this.query.getLoaded().pipe(
      take(1),
      filter(res => !res),
      switchMap(() => {
        this.transporterStore.setLoading(true);
        return this.service.getTransporters();
      })
    ).subscribe(res => {
      this.transporterStore.update(state => {
        return{
          transporters: res,
          isLoaded: true,
        };
      });

      this.transporterStore.setLoading(false);
    }, err => {
      console.log(err);
      this.transporterStore.setLoading(false);
    });
  }

  show() {
    const ref = this.dialogService.open(TransporterFormComponent, {
        header: 'Add new transporter',
        width: '70%',
        data: EMPTY_TRANSPORTER
    });

    ref.onClose.subscribe((data: Transporter) => {
      if(data){
        this.transporterStore.setLoading(true);
        this.service.addTransporter(data).subscribe(res => {
          this.transporterStore.update(state => {
            return{
              transporters: [
                ...state.transporters,
                res
              ]
            };
          });
        });
        this.transporterStore.setLoading(false);
      }
    });
  }

  onEdit(data: Transporter){
    // console.log(data);

    const ref = this.dialogService.open(TransporterFormComponent, {
      header: 'Add new transporter',
      width: '70%',
      data: data
    });

    ref.onClose.subscribe((data: Transporter) => {
      if(data){
        this.service.updateTransporter(data.id, data).subscribe(res => {
          this.transporterStore.update(state => {
            const transporters = [...state.transporters];
            const index = this.transporters.findIndex(t => t.id === data.id);

            transporters[index] = {
              ...transporters[index],
              code: res.code,
              name: res.name,
              address: res.address,
              contact_phone: res.contact_phone
            };
            return{
              ...state,
              transporters
            };
          });
        }, err => console.log(err)
        );
      }
    });
  }
}
