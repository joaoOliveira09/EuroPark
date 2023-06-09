import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MessagesService } from './messages.service';
import { Router } from '@angular/router';
import { Reserva } from '../interfaces/Reserva';
import jwt_decode from 'jwt-decode'
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseApiUrl = environment.API_URL
  private apiUrl = `${this.baseApiUrl}reserva`
  
  

  constructor(private http: HttpClient,
    private messageService: MessagesService,
     private router: Router, 
     private usuarioService: UsuariosService) { }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl)
  }

   getReserva(id: String): Observable<Reserva> {
    const url = `${this.apiUrl}/${id}`

    return this.http.get<Reserva>(url)
  }
  // getMinhasReservas(id : String): Observable<Reserva>{

  // }



  createReserva(formData: Reserva): Observable<Reserva | boolean>{
    console.log(formData)
    // var usuario: Usuario = sessionStorage.getItem('token')?.sub
    // formData.user = usuario
    return this.http.post<Reserva>(this.apiUrl, formData).pipe(
      tap(()=>{
      this.messageService.add('Reserva adicionada com Sucesso')

        this.router.navigate(['/home'])
  }),
      catchError((error)=>{
        this.messageService.add(error.error)
          return of(false)
      })
    )
  }

  removeReserva(id: String){
    const url = `${this.apiUrl}/${id}`

    return this.http.delete(url)
  }

  updateReserva(id: String, formData: Reserva){
    const url = `${this.apiUrl}/${id}`

    return this.http.patch<Reserva>(url, formData).pipe(
      tap(()=>{
        this.messageService.add(`sua reserva foi atualizada com sucesso!`)

        this.router.navigate(['/'])
      }),
      catchError((error)=>{
        this.messageService.add('Ocorreu um Erro')
          return of(false)
      })

    )
  }
}
