import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingControl } from 'src/app/interfaces/ParkingControl';
import { MomentService } from 'src/app/services/vaga.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-Park.component.html',
  styleUrls: ['./edit-Park.component.css'],
})
export class EditMomentComponent implements OnInit {
  moment!: ParkingControl;
  btnText: String = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.momentService.getMoment(id!).subscribe((item) => {
      this.moment = item;
    });
  }
  editHandler(momentData: ParkingControl) {
    const id = this.moment.id_vaga;
    this.momentService.updateMoment(id!, momentData).subscribe();
  }
}
