import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarEstadoComponent,
    InserirEstadoComponent,
    ListarEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ]
})
export class EstadoModule { }
