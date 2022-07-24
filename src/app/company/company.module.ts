import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporterComponent } from './components/container/transporter/transporter.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { TransporterFormComponent } from './components/ui/transporter-form/transporter-form.component';

import {SharedModule} from '../shared/shared.module';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    TransporterComponent,
    TransporterFormComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    SharedModule,
    ProgressSpinnerModule,
  ],
  exports: [
    TransporterComponent,
  ]
})
export class CompanyModule { }
