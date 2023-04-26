import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { ParkingControl } from '../interfaces/ParkingControl';
import { Response } from '../interfaces/Response';
import { environment } from 'src/environments/environment';
import { MessagesService } from './messages.service';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.API_URL
  private apiUrl = `${this.baseApiUrl}parking-spot`

  constructor(private http: HttpClient,
    private messageService: MessagesService,
     private router: Router) { }

  getMoments(): Observable<ParkingControl[]> {
    return this.http.get<ParkingControl[]>(this.apiUrl)
  }

   getMoment(id: String): Observable<ParkingControl> {
    const url = `${this.apiUrl}/${id}`

    return this.http.get<ParkingControl>(url)
  }



  createMoment(formData: ParkingControl): Observable<ParkingControl | boolean>{

    return this.http.post<ParkingControl>(this.apiUrl, formData).pipe(
      tap(()=>{
      this.messageService.add('Vaga adicionada com Sucesso')

        this.router.navigate(['/home'])
  }),
      catchError((error)=>{
        this.messageService.add(error.error)
          return of(false)
      })
    )
  }

  removeMoment(id: String){
    const url = `${this.apiUrl}/${id}`

    return this.http.delete(url)
  }

  updateMoment(id: String, formData: ParkingControl){
    const url = `${this.apiUrl}/${id}`

    return this.http.patch<ParkingControl>(url, formData).pipe(
      tap(()=>{
        this.messageService.add(`Vaga ${formData.numeroVaga} foi atualizada com sucesso!`)

        this.router.navigate(['/'])
      }),
      catchError((error)=>{
        this.messageService.add('Ocorreu um Erro')
          return of(false)
      })

    )
  }
}
