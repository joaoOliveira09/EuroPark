import { Component, OnInit } from '@angular/core';
import { faEdit, faSearch,faTimes } from '@fortawesome/free-solid-svg-icons';
import { Reserva } from 'src/app/interfaces/Reserva';
import { Usuario } from 'src/app/interfaces/usuario';
import { JwtService } from 'src/app/security/jwt.service';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {

  faSearch = faSearch
  faTimes = faTimes
  searchTerm: string = ''
  faEdit = faEdit
  reservas: Reserva[] = []
  allReservas: Reserva[] = []

  constructor(private reservaService: ReservaService,
              private jwt: JwtService) { }

  ngOnInit(): void {

    let id  =  this.jwt.getTokenSub()

    this.reservaService.getMinhasReservas(id).subscribe((items) =>{
      console.log(items)
      items.map(item =>{
            item.dataInicial= new Date(item.dataInicial!).toLocaleDateString('pt-BR')
            item.dataFinal= new Date(item.dataFinal!).toLocaleDateString('pt-BR')

           })
       this.allReservas = items
       this.reservas = items
             
    })
  }

  search(event: Event): void{

    const target = event.target as HTMLInputElement
    const value = target.value

     this.reservas = this.allReservas.filter(reserva => {
      return reserva.descricaoVeiculo!.toLowerCase().includes(value)
    })

  }

  removeHandler(){
  //   this.momentService.removeMoment(id).subscribe()
  //  this.messageService.add("Vaga Excluida com sucesso!")
  //  this.router.navigate(['/home'])
  }

}
