import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Usuario } from '../../../interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Usuario>()
  formLogin!: FormGroup
  usuario!: Usuario

  constructor(private router: Router,
    private service: LoginService,
    private messageService:MessagesService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('',[Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }
  get username() {
    return this.formLogin.get('username')!
  }

  get senha() {
    return this.formLogin.get('senha')!
  }

  logar(): void{
    //
    const user: Usuario = this.formLogin.value
    this.service.login(user).subscribe()

}
}
