import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    TransporterComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    TransporterComponent,
  ]
})
export class CompanyModule { }
