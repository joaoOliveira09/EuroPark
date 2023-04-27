import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseApiUrl = environment.API_URL
  private apiUrl = `${this.baseApiUrl}user`

  constructor(private http: HttpClient,
    private messageService: MessagesService,
     private router: Router) { }

     getUsers(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl)
    }

    getUser(id: String): Observable<Usuario> {
      const url = `${this.apiUrl}/${id}`

      return this.http.get<Usuario>(url)
    }

     createUser(formData: Usuario): Observable<Usuario | boolean>{
      console.log(formData)
      return this.http.post<Usuario>(this.apiUrl, formData).pipe(
        tap(()=>{
          console.log(formData.userId)
          this.messageService.add(`Usuário ${formData.username} Cadastrado  com sucesso!`)
          this.router.navigate(['/home'])
        }),
          catchError((error)=>{
            this.messageService.add('Preencha Todos os Campos')
              return of(false)
        })
      )
    }

    updateUser(formData: Usuario,id: string): Observable<Usuario | boolean>{
      return this.http.put<Usuario>(`${this.apiUrl}/${id}`, formData).pipe(
        tap(()=>{
          this.messageService.add(`Usuário ${formData.username} foi atualizado com sucesso!`)
          this.router.navigate(['/'])
        }),
        catchError((error)=>{
          this.messageService.add(error.error)
            return of(false)
      })
      )
    }

    removeUser(id: String){
      const url = `${this.apiUrl}/${id}`

      return this.http.delete(url).pipe(
        tap(() => {

          this.messageService.add('Usuário Excluido com Sucesso!')
  
        }),
  
        catchError((error) => {
  
          this.messageService.add(error.error)
  
          return of(false)
  
        }))
    }

}
