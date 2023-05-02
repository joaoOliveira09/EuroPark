import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/vaga.service';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { environment } from 'src/environments/environment';
import{faSearch} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: ParkingControl[] = []
  moments: ParkingControl[] = []
  baseApiUrl = environment.API_URL

  faSearch = faSearch
  searchTerm: string = ''

  constructor(private momentService: MomentService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) =>{
      console.log(items)
      this.allMoments = items
      this.moments = items
    })

  }

  search(event: Event): void{

    const target = event.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(moment => {
     return moment.numeroVaga!.toString().includes(value)
    })

  }


}
