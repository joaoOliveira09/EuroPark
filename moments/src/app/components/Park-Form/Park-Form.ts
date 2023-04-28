import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { Usuario } from '../../interfaces/usuario';

import jwt_decode from 'jwt-decode'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-moment-form',
  templateUrl: './Park-Form.component.html',
  styleUrls: ['./Park-Form.css']
})
export class MomentFormComponent implements OnInit {
  [x: string]: any;
  @Output() onSubmit = new EventEmitter<ParkingControl>()
  @Input() btnText!: String
  @Input() momentData: ParkingControl | null = null


  momentForm!: FormGroup;
  usuarios: Usuario[] = []
  usuarioEspecifico: Usuario | undefined
  usuario: Usuario | undefined;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {


 this.usuarioService.getUsers().subscribe((items) =>{    
      this.usuarios = items 
      console.log(this.usuarios)
      console.log(this.usuarios);
    this.usuario = this.usuarios.find(usuario => usuario.userId === this.usuario?.userId);
    
      if (this.usuario) {
        this.usuarioEspecifico = this.usuario
      }
     
    }) 
 
  this.momentForm = new FormGroup({
    // nomeProprietario: new FormControl(this.momentData ? this.momentData.nomeProprietario:'',[Validators.required]),
    numeroVaga: new FormControl(this.momentData ? this.momentData.numeroVaga:'',[Validators.required]),
    reservadoOuNao: new FormControl(this.momentData ? this.momentData.reservadoOuNao:'false',[Validators.required]),
    valorPelaVaga: new FormControl(this.momentData ? this.momentData.valorPelaVaga:'',) ,
    user: new FormControl('')
  })
}

  selectedOption: string = ''

  onSelectChange(event: any){
    this.selectedOption = event.target.value;
    //this.selectedOption  = usuario.userId!
    console.log('Opção selecionada:', this.selectedOption)
    //this.usuarios[0] = this.selectedOption
  }

 

  

  // get nomeProprietario(){
  //   return this.momentForm.get('nomeProprietario')!
  // }

  get numeroVaga(){
    return this.momentForm.get('numeroVaga')!
  }


   get reservadoOuNao(){
     return this.momentForm.get('reservadoOuNao')!
   }

  get valorPelaVaga(){
    return this.momentForm.get('valorPelaVaga')!
  }

    get user(){

      return this.momentForm.get('user')!
    }
  

  Submit(){
    console.log(this.selectedOption)
    if(this.momentForm.invalid){
      return
    }
    const user: Usuario = {
      userId : this.selectedOption 
    }
    
    this.momentForm.value.user = user
    console.log('machosta'+this.momentForm.value)
    this.onSubmit.emit(this.momentForm.value)
  }

}
