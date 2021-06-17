import { Component, OnInit } from '@angular/core';
import { Funcionario } from './classes/classe.funcionario';
import { Salario } from './classes/classe.salario';
import { FuncionarioService } from './services/service.funcionario';

@Component({
  selector: 'exemplos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.listar();
  }

  constructor(private funcionarioService: FuncionarioService){ }

  listar(){
    this.funcionarios = this.funcionarioService.listarFuncionarios();
  }

  //exemplo 01 - binding unidirecional (componente -> view)
  rnd: number = Math.random(); //retorna um valor entre 0 e 1

  //exemplo 02 - gerando uma lista de funcionarios
  funcionarios: Funcionario[];



  nomeFuncionario: string;
  mostrar(nome): void {
    //this.nomeFuncionario = event.value;
    this.nomeFuncionario = nome;
  }

  //exemplo 03 - filtros
  filtrar(event): void {
    this.listar();
    this.funcionarios = this.funcionarios
      .filter(p => p.nome.toLowerCase().includes(
          event.target.value.toLowerCase()));
  }

  //exemplo 04 - Binding Bidirecional
  func: Salario = new Salario();
  imposto: number;

  efetuarCalculo(){
    this.imposto = this.func.calcular();
  }
}
