import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  girando: boolean = true


  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    setTimeout( ()=>{this.girando = false},2500)
  }
  
  sair(){
    this.loginService.logout()
  }

}


