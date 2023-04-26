import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Usuario>()
  formCadastrar!: FormGroup
  usuario!: Usuario
  allUsers: Usuario[] = []
  usuarios: Usuario[] = []
  faTimes = faTimes
  faEdit = faEdit
  usuarioEdit!: Usuario
  edicao: boolean = false
  titulo: string = 'Cadastrar'

  constructor(private router: Router,private service:UsuariosService,
    private route: ActivatedRoute,
     private messageService: MessagesService) { }

  ngOnInit(): void {


    this.formCadastrar = new FormGroup({
      username: new FormControl(this.usuarioEdit ? this.usuarioEdit.username : '',[Validators.required]),
      senha: new FormControl(this.usuarioEdit ? this.usuarioEdit.senha : '', [Validators.required]),
      permissao: new FormControl(this.usuarioEdit ? this.usuarioEdit.permissao : '',[Validators.required]),
      numeroApartamento: new FormControl(this.usuarioEdit ? this.usuarioEdit.numeroApartamento : '',[Validators.required]),
      bloco: new FormControl(this.usuarioEdit ? this.usuarioEdit.bloco : '',[Validators.required]),
    })

    this.refresh()
    
  }

  get username() {
    return this.formCadastrar.get('username')!
  }

  get senha() {
    return this.formCadastrar.get('senha')!
  }

  get permissao() {
    return this.formCadastrar.get('permissao')!
  }
  get id(){
    return this.formCadastrar.get('id')!
  }
  get numeroApartamento(){
    return this.formCadastrar.get('numeroApartamento')!
  }
  get bloco(){
    return this.formCadastrar.get('bloco')!
  }

  cadastrar(): void{
    if(!this.edicao){
      const user: Usuario = this.formCadastrar.value
    user.permissao = "USER"
    this.service.createUser(user).subscribe()
      }else{
        const user: Usuario = this.formCadastrar.value
        user.permissao = "USER"
        this.service.updateUser(user,this.usuarioEdit.userId!).subscribe()
      }

    

}

 removeHandler(id: String){
  this.service.removeUser(id).subscribe(()=>{
    this.refresh()
    this.messageService.add("Usuário Excluido com sucesso!")
  })

 }
 refreshForm(){
  this.formCadastrar = new FormGroup({
    username: new FormControl(this.usuarioEdit ? this.usuarioEdit.username : '',[Validators.required]),
    senha: new FormControl('', [Validators.required]),
    permissao: new FormControl(this.usuarioEdit ? this.usuarioEdit.permissao : '',[Validators.required]),
    numeroApartamento: new FormControl(this.usuarioEdit ? this.usuarioEdit.numeroApartamento : '',[Validators.required]),
      bloco: new FormControl(this.usuarioEdit ? this.usuarioEdit.bloco : '',[Validators.required]),
  })
 }

 refresh(){
  this.service.getUsers().subscribe((items) =>{
     this.allUsers = items
     this.usuarios = items
   }) 
 }

 editHandler(id: String){
  this.titulo = 'Editar'
  this.service.getUser(id).subscribe(item=>{
  this.usuarioEdit= item
  this.refreshForm()
  this.edicao = true
})
 }

 clear(){
  console.log("algo")
 }

 limit(input: HTMLInputElement, event: any){
  if (input.value.length > 4 || (event.data && event.data.toLowerCase() == 'e'))
    input.value = input.value.slice(0, -1)
 }

 soLetras(input: HTMLInputElement, event: any){
  if (input.value.length > 2 || (event.data && /[0-9]/.test(event.data)))
  input.value = input.value.slice(0, -1)
 }

}
