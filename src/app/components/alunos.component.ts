import { Component } from '@angular/core';
import { IAluno } from '../interfaces/interface.aluno';
import { AlunosService } from '../services/service.aluno';

@Component({
    selector: 'alunos',
    templateUrl: 'alunos.component.html'
})
export class AlunosComponent {

    //lista de alunos
    public listaAlunos: IAluno[];

    //aluno selecionado na lista
    public alunoSelecionado: IAluno;

    public selecionar(item: IAluno) : void {
        this.alunoSelecionado = item;
    }

    //inclusão de alunos
    private novoAluno: IAluno;

    public novo(): void {
        this.novoAluno = { Matricula: 0, Nome: '', Email: '' };
        this.alunoSelecionado = this.novoAluno;
    }

    public incluir(aluno: IAluno) : void {
        //this.listaAlunos.push(aluno);

        this.alunosService.postAlunoWS(aluno).subscribe(
            resposta => {
                JSON.stringify(resposta);
                alert('Aluno incluído com sucesso');
            },            
            error => alert(error),
            () => this.listar());

        
    }

    //construtor
    constructor(private alunosService: AlunosService){
        //this.listaAlunos = alunosService.getAlunos();
        this.listar();
    }

    public listar(): void {
        this.alunosService.getAlunosWS()
            .subscribe(resposta => this.listaAlunos = resposta);        
    }

}