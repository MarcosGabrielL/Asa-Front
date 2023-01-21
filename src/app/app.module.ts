import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MovieReadComponent } from './components/views/movie/movie-read/movie-read.component';
import { MovieCreateComponent } from './components/views/movie/movie-create/movie-create.component';
import { MovieUpdateComponent } from './components/views/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/views/movie/movie-delete/movie-delete.component';
import { ComentarioCreateComponent } from './components/views/comentario/comentario-create/comentario-create.component';
import { ComentarioReadAllComponent } from './components/views/comentario/comentario-read-all/comentario-read-all.component';
import { ComentarioReadComponent } from './components/views/comentario/comentario-read/comentario-read.component';
import { ComentarioUpdateComponent } from './components/views/comentario/comentario-update/comentario-update.component';
import { ComentarioDeleteComponent } from './components/views/comentario/comentario-delete/comentario-delete.component';
import { CinefiloReadComponent } from './components/views/cinefilo/cinefilo-read/cinefilo-read.component';
import { CinefiloUpdateComponent } from './components/views/cinefilo/cinefilo-update/cinefilo-update.component';
import { CinefiloDeleteComponent } from './components/views/cinefilo/cinefilo-delete/cinefilo-delete.component';
import { HomeComponent } from './components/views/home/home.component';
import { HomeGeralFilmesComponent } from './components/views/home/home-geral-filmes/home-geral-filmes.component';
import { HomeAcaoFilmesComponent } from './components/views/home/home-acao-filmes/home-acao-filmes.component';
import { HomeSerieComponent } from './components/views/home-serie/home-serie.component';
import { CinefiloHomeComponent } from './components/views/cinefilo/cinefilo-home/cinefilo-home.component';
import { NoticiasHomeComponent } from './components/views/noticias/noticias-home/noticias-home.component';
import { ListasHomeComponent } from './components/views/listas/listas-home/listas-home.component';
import { ArtistasHomeComponent } from './components/views/artistas/artistas-home/artistas-home.component';
import { MovieBuscaComponent } from './components/views/movie/movie-busca/movie-busca.component';
import { MoviePageComponent } from './components/views/movie/movie-page/movie-page.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ForgotComponent } from './components/security/forgot/forgot.component';
import { HttpInterceptorService } from './components/security/httpinterceptor.service';
import { PagenotfoundComponent } from './components/template/pagenotfound/pagenotfound.component';
import { TorrentsModalComponent } from './components/views/movie/movie-page/torrents-modal/torrents-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MovieReadComponent,
    MovieCreateComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
    ComentarioCreateComponent,
    ComentarioReadAllComponent,
    ComentarioReadComponent,
    ComentarioUpdateComponent,
    ComentarioDeleteComponent,
    CinefiloReadComponent,
    CinefiloUpdateComponent,
    CinefiloDeleteComponent,
    HomeComponent,
    HomeGeralFilmesComponent,
    HomeAcaoFilmesComponent,
    HomeSerieComponent,
    CinefiloHomeComponent,
    NoticiasHomeComponent,
    ListasHomeComponent,
    ArtistasHomeComponent,
    MovieBuscaComponent,
    MoviePageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    PagenotfoundComponent,
    TorrentsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    TranslateModule
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
