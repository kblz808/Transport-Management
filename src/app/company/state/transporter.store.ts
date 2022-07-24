import { Injectable } from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

import { Transporter } from '../models/transporter.model';

export interface TransporterState{
  transporters: Transporter[];
  isLoaded: boolean;
}

export const getInitialState = () => {
  return {
      transporters:[],
      isLoaded: false,
  };
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'todo'})
export class TransporterStore extends Store<TransporterState>{
  constructor(){
      super(getInitialState());
  }
}