import { Funcionario } from '../classes/classe.funcionario';
import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {
    listarFuncionarios(): Funcionario[] {
        return [
          { nome: 'Pedro', idade: 23 },
          { nome: 'Marina', idade: 25 },
          { nome: 'Pimpolho', idade: 44 },
          { nome: 'Lucelia', idade: 42 }
        ];
      }
}