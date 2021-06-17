import { Injectable } from '@angular/core';
import { IAluno } from '../interfaces/interface.aluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosService {

    //acesso ao módulo HttpClient
    public constructor(private http: HttpClient) { }

    private url: string = "http://localhost:3200/alunos";
    //private url: string = "http://localhost:3000/alunos";

    //HTTP GET - lista todos os alunos
    public getAlunosWS(): Observable<IAluno[]> {
        return this.http.get<IAluno[]>(this.url);
    }

    //HTTP POST - inclui um novo aluno
    public postAlunoWS(aluno: IAluno) : Observable<IAluno> {
        return this.http.post<IAluno>(this.url, aluno);
    }

    public getAlunos(): IAluno[] {
        return [
            { Matricula: 100, Nome: 'Emilio', Email: 'emiliocelso@hotmail.com' },
            { Matricula: 200, Nome: 'Pedro Santos', Email: 'pedro@hotmail.com' },
            { Matricula: 300, Nome: 'Sandra', Email: 'sandra@hotmail.com' }
        ];
    }

}