import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from 'src/app/shared/models/estado.model';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';
import { EstadoService } from '../services/estado.service';


@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent {
  estados : Estado[] = [];

  constructor(private estadoService: EstadoService,
              private modalService: NgbModal) {}

  abrirModalEstado(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }
             

  ngOnInit(): void {
    this.estados = this.listarTodos()
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
    
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado ${estado.nome}?`)) {
        this.estadoService.remover(estado.id!);
        this.estados = this.listarTodos();
    }
  }


}
