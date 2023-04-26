import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { MomentService } from 'src/app/services/vaga.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-vaga.component.html',
  styleUrls: ['./new-vaga.component.css']
})
export class NewMomentComponent implements OnInit {
btnText='Cadastrar!'

  constructor(private momentService: MomentService, private messagesService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createHandler(moment: ParkingControl){
    console.log(moment)
    const formData = new FormData()
  this.momentService.createMoment(moment).subscribe()

  
   //location.reload()
  }
}
