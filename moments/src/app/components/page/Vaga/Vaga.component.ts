import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/services/vaga.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';


import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-moment',
  templateUrl: './Vaga.component.html',
  styleUrls: ['./Vaga.component.css']
})
export class MomentComponent implements OnInit {
  moment?: ParkingControl
  baseApiUrl = environment.API_URL

  faTimes = faTimes
  faEdit = faEdit

  commentForm!: FormGroup

  constructor(private momentService: MomentService,
     private route: ActivatedRoute,
     private messageService: MessagesService,
     private router: Router,
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id_vaga")

    this.momentService.getMoment(id!).subscribe((item) => (this.moment = item))

    this.commentForm = new FormGroup({
      numeroVaga: new FormControl('',[Validators.required]),
      nomeProprietario: new FormControl('',[Validators.required]),
      valorPelaVaga: new FormControl('',[Validators.required])
    })
  }

  get numeroVaga(){
    return this.commentForm.get('numeroVaga')!
  }

  get nomeProprietario(){
    return this.commentForm.get('nomeProprietario')!
  }

  get valorPelaVaga(){
    return this.commentForm.get('valorPelaVaga')!
  }

  removeHandler(id: String){
    this.momentService.removeMoment(id).subscribe()
   this.messageService.add("Vaga Excluida com sucesso!")
   this.router.navigate(['/home'])
  }

    // onSubmit(formDirective: FormGroupDirective){
    //   window.location.reload
    // }

}
