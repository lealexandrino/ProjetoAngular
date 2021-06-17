import { Routes } from "@angular/router";
import { HomeComponent } from '../components/home.component';
import { AppComponent } from '../app.component';
import { ExercicioComponent } from '../components/exercicio.component';
import { ErroComponent } from '../components/erro.component';
import { AlunosComponent } from '../components/alunos.component';

export const appRoute: Routes = [
    { path: "", component: HomeComponent},
    { path: "exemplos", component: AppComponent},
    { path: "exercicios", component: ExercicioComponent},
    { path: "alunos", component: AlunosComponent},
    { path: "**", component: ErroComponent}
]