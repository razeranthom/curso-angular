import { Component } from '@angular/core';
import { Cidade } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent {
  cidades : Cidade[] = [];

  constructor(private cidadeService: CidadeService,
              private modalService: NgbModal) {}

  abrirModalCidade(cidade: Cidade) {
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }
             

  ngOnInit(): void {
    this.cidades = this.listarTodos()
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
    
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
        this.cidadeService.remover(cidade.id!);
        this.cidades = this.listarTodos();
    }
  }

}
