import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss']
})
export class TransporterComponent implements OnInit {
  form: FormGroup;
  @Output() formSubmit = new EventEmitter();

  display: boolean = false;

  transporters: any[] = [
    {
      code: 0,
      name: '',
      address: '',
      contact_phone: '',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: '',
      code: '',
      name: '',
      address: '',
      contact_phone: ''
    });
  }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

  onClose(){
    this.display = false;
  }

  onSubmit(): void {
    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }
}
