import { Query } from "@datorama/akita";
import { Observable } from "rxjs";

import { Transporter } from '../models/transporter.model';

import { TransporterState, TransporterStore } from "./transporter.store";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransporterQuery extends Query<TransporterState>{
  constructor(private transporterStore: TransporterStore){
      super(transporterStore);
  }

  getTodos(): Observable<Transporter[]>{
      return this.select(state => state.transporters);
  }

  getLoaded(): Observable<boolean>{
      return this.select(state => state.isLoaded)
  }

  getIsLoading(): Observable<boolean>{
      return this.selectLoading();
  }
}