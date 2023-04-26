import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/page/about/about.component';
import { HomeComponent } from './components/page/home/home.component';
import { NewMomentComponent } from './components/page/new-vaga/new-vaga.component';
import { MomentFormComponent } from './components/Park-Form/Park-Form';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './components/page/Vaga/Vaga.component';
import { EditMomentComponent } from './components/page/edit-Park/edit-Park.component';
import { LoginComponent } from './components/page/login/login.component';
import { UsuariosComponent } from './components/page/usuarios/usuarios.component';
import { TokenInterceptor } from './security/token-interceptor';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { MinhasReservasComponent } from './components/minhas-reservas/minhas-reservas.component';
import { NewReservaComponent } from './components/edit-reserva/new-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent,
    MomentComponent,
    EditMomentComponent,
    LoginComponent,
    UsuariosComponent,
    ReservaFormComponent,
    MinhasReservasComponent,
    NewReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
