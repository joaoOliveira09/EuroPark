import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { Reserva } from 'src/app/interfaces/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { JwtService } from 'src/app/security/jwt.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Reserva>()
  @Input() btnText!: String
  @Input() momentData: Reserva | null = null

  reservaForm!: FormGroup;
  //vaga: ParkingControl = {id_vaga: string}
  
  constructor( private reservaService: ReservaService,
     private route: ActivatedRoute, private jwt: JwtService) { }

   ngOnInit(): void {

    this.reservaForm = new FormGroup({
      descricaoVeiculo: new FormControl(this.momentData ? this.momentData.descricaoVeiculo:'',[Validators.required]),
      dataInicial: new FormControl(this.momentData ? this.momentData.dataInicial:'',[Validators.required]),
      dataFinal: new FormControl(this.momentData ? this.momentData.dataFinal:'',[Validators.required]),
      valorPagamento: new FormControl(this.momentData ? this.momentData.valorPagamento:''),
      formaPagamento: new FormControl(this.momentData ? this.momentData.formaPagamento:'',[Validators.required]),
      user: new FormControl(),
      vaga: new FormControl()
    }) 
   }
  

  get descricaoVeiculo(){
    return this.reservaForm.get('descricaoVeiculo')!
  }

  get dataInicial(){
    return this.reservaForm.get('dataInicial')!
  }

  get dataFinal(){
    return this.reservaForm.get('dataFinal')!
  }
  get valorPagamento(){
    return this.reservaForm.get('valorPagamento')!
  }

  get formaPagamento(){
    return this.reservaForm.get('formaPagamento')!
  }
  selectedOption: string = ''

  onSelectChange(event: any){
    this.selectedOption = event.target.value;
    //this.selectedOption  = usuario.userId!
    console.log('Opção selecionada:', this.selectedOption)
    //this.usuarios[0] = this.selectedOption
  }


  Submit(): void{
    if(this.reservaForm.invalid){
      return
    }
    const vaga: ParkingControl = {
      id_vaga : this.route.snapshot.paramMap.get("id_vaga")!

    }
    const user: Usuario = {
      userId : this.jwt.getTokenSub()

    }

    this.reservaForm.value.vaga = vaga
    this.reservaForm.value.user = user
    
    console.log(this.reservaForm.value)

    this.reservaService.createReserva(this.reservaForm.value).subscribe()
  }

}
