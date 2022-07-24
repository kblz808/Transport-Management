import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';


@Component({
  selector: 'app-transporter-form',
  templateUrl: './transporter-form.component.html',
  styleUrls: ['./transporter-form.component.scss']
})
export class TransporterFormComponent implements OnInit {
  form: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    
    this.form = this.fb.group({
      id: config.data.id,
      code: config.data.code,
      name: config.data.name,
      address: config.data.address,
      contact_phone: config.data.contact_phone
    });
  }

  ngOnInit(): void {}

  onClose(){
    this.ref.close()
  }

  onSubmit(): void {
    const payload = this.form.value;
    this.ref.close(payload)
  }
}
