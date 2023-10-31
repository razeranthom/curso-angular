import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from 'src/app/shared/models/estado.model';

@Component({
  selector: 'app-modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrls: ['./modal-estado.component.css']
})
export class ModalEstadoComponent {
  @Input() estado!: Estado;
  constructor(public activeModal: NgbActiveModal) {}

}
