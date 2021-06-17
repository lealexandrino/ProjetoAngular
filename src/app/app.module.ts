import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


//deve ser inserido antes dos componentes
import { appRoute } from "./routes/app.route";

import { AppComponent } from './app.component';
import { FuncionarioService } from './services/service.funcionario';
import { PrincipalComponent } from './components/principal.component';
import { MenuComponent } from './components/menu.component';
import { HomeComponent } from './components/home.component';
import { ExercicioComponent } from './components/exercicio.component';
import { ErroComponent } from './components/erro.component';
import { AlunosComponent } from './components/alunos.component';
import { AlunosService } from './services/service.aluno';
import { SubListaAlunos } from './filters/filter.aluno';

@NgModule({
  declarations: [
    AppComponent, PrincipalComponent, MenuComponent, HomeComponent, 
    ExercicioComponent, ErroComponent, AlunosComponent, SubListaAlunos
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoute), HttpClientModule
  ],
  providers: [ FuncionarioService, AlunosService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
