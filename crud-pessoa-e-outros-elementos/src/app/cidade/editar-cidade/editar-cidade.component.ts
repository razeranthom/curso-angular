import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent {
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();
  estados : Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.estados = this.estadoService.listarTodos();
      let id = +this.route.snapshot.params['id'];
      const res = this.cidadeService.buscarPorId(id);
      if (res !== undefined)
         this.cidade = res;
      else 
         throw new Error ("Cidade não encontrada: id = " + id);
   }
 
   atualizar(): void {
     // Verifica se o formulário é válido
     if (this.formCidade.form.valid) {
        this.cidadeService.atualizar(this.cidade);
        this.router.navigate(['/cidades']);
     }
  }

}
