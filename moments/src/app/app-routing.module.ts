import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/page/about/about.component';
import { EditMomentComponent } from './components/page/edit-Park/edit-Park.component';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { MomentComponent } from './components/page/Vaga/Vaga.component';
import { NewMomentComponent } from './components/page/new-vaga/new-vaga.component';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { AuthGuardService } from './security/auth-guard.service';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';
import { NewReservaComponent } from './components/edit-reserva/new-reserva.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuardService]},
  {path: 'moments/new', component: NewMomentComponent, canActivate: [AuthGuardService]},
  {path: 'moments/edit/:id', component: EditMomentComponent, canActivate: [AuthGuardService]},
  // {path: 'home/moments', component: MomentComponent, canActivate: [AuthGuardService]},
  {path: 'home/moments/:id_vaga', // Caminho da rota com o parâmetro ':id'
    component: MomentComponent, // Componente associado à rota
    canActivate: [AuthGuardService] // Guarda de rota (opcional)
},
  {path: 'usuarios', component: UsuariosComponent},
  // alterar para receber o id
  {path: 'home/reservar/:id_vaga', component: ReservaFormComponent},
  //Rota minhas Reservas
  {path: 'minhasReservas', component: MinhasReservasComponent},
  //Rota editReserva vai precisar do id tbm
  {path: 'minhasReservas/edit', component: NewReservaComponent},
  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
