import { Pipe, PipeTransform } from '@angular/core';
import { IAluno } from '../interfaces/interface.aluno';


@Pipe({
    name: 'sublista'
})
export class SubListaAlunos implements PipeTransform {

    transform(alunos: IAluno[], input: string): IAluno[] {
        
        if(input){
            return alunos.filter(aluno => 
                aluno.Nome.toLowerCase().includes(input.toLowerCase()));
        } else {
            return alunos;
        }
    }
}