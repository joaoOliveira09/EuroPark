import { Component, OnInit } from '@angular/core';
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/interfaces/usuario';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {

  faSearch = faSearch
  searchTerm: string = ''
  faEdit = faEdit
  usuarios: Usuario[] = []

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {

    this.reservaService.getReservas()
  }

  search(event: Event): void{

    const target = event.target as HTMLInputElement
    const value = target.value

    // this.moments = this.allMoments.filter(moment => {
    //  return moment.responsibleName.toLowerCase().includes(value)
    //})

  }

}
