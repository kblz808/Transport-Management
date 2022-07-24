import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Transporter } from '../models/transporter.model';

@Injectable({ providedIn: 'root' })
export class TransporterService {
    private readonly baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    addTransporter(data: Transporter): Observable<Transporter>{        
        return this.http.post<Transporter>(`${environment.apiUrl}/transporters`, {...data});
    }

    getTransporters(): Observable<Transporter[]>{
        return this.http.get<Transporter[]>(`${this.baseUrl}/transporters`).pipe(
            tap(data => data)
        )    
    }

    updateTransporter(id: string, changes: any): Observable<Transporter>{
        return this.http.put<Transporter>(`${this.baseUrl}/transporters/${id}`, changes);
    }















    // get(): Transporter[]{
    //     return this.transporters;
    //     // this.transporterStore.set();
    // }

    // get() {
    //     const url = `${environment.apiUrl}/transporters`;
    //     this.http.get<Transporter[]>(url).subscribe(data => {
    //         // this.transporters = data;
    //         console.log(data);
            
    //     })
    // }

    // get() {
    //     const url = `${environment.apiUrl}/transporters`;
    //     return this.http.get(url).pipe(
    //       tap({next: (response: any) => {
    //         if (response.success) {
    //           this.transporterStore.set(response.data);
    //         } else {
    //           console.log("error");
    //         }
    //       }, error: () => console.log("error 2")
    //       })
    //     )
    // }


    // add(transporter: Transporter): void {
    //     this.transporterStore.add(transporter);
    // }
}