import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    DynamicDialogModule,
    TableModule
  ],
  exports: [
    ListComponent
  ]
})
export class SharedModule { }
