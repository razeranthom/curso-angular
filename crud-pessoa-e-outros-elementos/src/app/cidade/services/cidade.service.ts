import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared';

const LS_CHAVE = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    // Precisa do condicional, pois retornar undefined se
    // a chave não existe
    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(cidade: Cidade): void {
    // Obtém a lista completa de cidades
    const cidades = this.listarTodos();

    // Seta um ID único
    // Usamos o Timestamp, quantidade de segundos desde 1970
    cidade.id = new Date().getTime();

    // Adiciona no final da lista
    cidades.push(cidade);

    // Armazena no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: number): Cidade | undefined {
    // Obtem a lista completa de cidades
    const cidades = this.listarTodos();

    // Efetua a busca
    // find() : retorna o primeiro elemento da lista que
    //          satisfaz a condição, caso contrário, undefined
    return cidades.find(cidade => cidade.id === id);
  }

  atualizar(cidade: Cidade): void {
    // Obtem a lista completa de cidades
    const cidades = this.listarTodos();

    // Varre a lista de cidades
    // Quando encontra cidade com mesmo id, altera a lista
    cidades.forEach( (obj, index, objs) => {
       if (cidade.id === obj.id) {
        objs[index] = cidade
       }
    });

    // Armazena a nova lista no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void {
    // Obtem a lista completa de cidades
    let cidades = this.listarTodos();

    // filter() : retorna a mesma lista contendo todos
    //            os registros que satisfazem a condição
    cidades = cidades.filter(cidade => cidade.id !== id);

    // Atualiza a lista de cidades
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
