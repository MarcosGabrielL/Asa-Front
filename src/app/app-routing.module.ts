import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { HomeSerieComponent } from './components/views/home-serie/home-serie.component';
import { MovieReadComponent } from './components/views/movie/movie-read/movie-read.component';
import { MoviePageComponent } from './components/views/movie/movie-page/movie-page.component';
import { MovieBuscaComponent } from './components/views/movie/movie-busca/movie-busca.component';
import { HomeGeralFilmesComponent } from './components/views/home/home-geral-filmes/home-geral-filmes.component';
import { HomeAcaoFilmesComponent } from './components/views/home/home-acao-filmes/home-acao-filmes.component';
import { CinefiloHomeComponent } from './components/views/cinefilo/cinefilo-home/cinefilo-home.component';
import { NoticiasHomeComponent } from './components/views/noticias/noticias-home/noticias-home.component';
import { ListasHomeComponent } from './components/views/listas/listas-home/listas-home.component';
import { ArtistasHomeComponent } from './components/views/artistas/artistas-home/artistas-home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   {
    path: 'home',
    component: HomeComponent,
        children: [
                    {path: '',  component: HomeGeralFilmesComponent, pathMatch: 'full'},
                    { path: 'filmes/:genero', component: HomeAcaoFilmesComponent, pathMatch: 'full'}
                  ]
   },
   {
    path: 'home-serie',
    component: HomeSerieComponent
   },
   {
    path: 'home-cinefilo',
    component: CinefiloHomeComponent
   },
   {
    path: 'home-noticias',
    component: NoticiasHomeComponent
   },
   {
    path: 'home-listas',
    component: ListasHomeComponent
   },
   {
    path: 'home-artistas',
    component: ArtistasHomeComponent
   },
   {
    path: 'filme/:id',
    component: MoviePageComponent
   },
   {
    path: 'busca/filme',
    component: MovieBuscaComponent
   },
   {
    path: 'busca/filme/:id',
    component: MovieBuscaComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
