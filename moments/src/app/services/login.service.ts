import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Usuario} from '../interfaces/usuario';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/';
  private readonly USUARIO_LOGADO = 'usuario-logado';

  constructor(private http: HttpClient,private router: Router,
     private messageService: MessagesService ) {
   }

   login(usuario: Usuario): Observable<Usuario| boolean>{
    return this.http.post<Usuario>(this.API_URL+'login', usuario).pipe(
      tap((usuario)=>{
        this.setarUsuarioLogado(usuario)
        this.router.navigate(['/home']);
      }),
      catchError((error)=>{
        this.messageService.add(error.error)
          return of(false)
      })
    )
  }

  setarUsuarioLogado(usuario: Usuario): void{
    sessionStorage.setItem('token', usuario.token!);
  }

  logout():void{
    sessionStorage.removeItem('token');
    this.router.navigate(['/'])
  }
  usuarioLogado(): string{
    return sessionStorage.getItem('token')!
  }
}
