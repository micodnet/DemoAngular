import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { ExoComponent } from './components/exo/exo.component';
import { FormsModule } from '@angular/forms';
import { EurToBtcPipe } from './shared/pipe/eur-to-btc.pipe';
import { PowerPipe } from './shared/pipe/power.pipe';
import { CustomPipe } from './shared/pipe/custom.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { Exo1Component } from './components/exo/exo1/exo1.component';
import { MamyPipe } from './shared/pipe/mamy.pipe';
import { HighlightDirective } from './components/demo/demo5/highlight.directive';
import { HighlightDynamicsDirective } from './components/demo/demo5/highlight-dynamics.directive';
import { ExosDirectiveComponent } from './components/exo/exos-directive/exos-directive.component';
import { TrimerDirective } from './components/exo/exos-directive/trimer.directive';
import { PlayerComponent } from './components/demo/topPlayers/player/player.component';
import { TopPlayersComponent } from './components/demo/topPlayers/top-players.component';
import { Exo2Component } from './components/exo/exo2/exo2.component';
import { ArticleComponent } from './components/exo/exo2/article/article.component';
import { ListArticleComponent } from './components/exo/exo2/list-article/list-article.component';
import { Exo3Component } from './components/exo/exo3/exo3.component';
import { ListeComponent } from './components/exo/exo3/liste/liste.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Exo4Component } from './components/exo/exo4/exo4.component';
import { CibleComponent } from './components/demo/demo9/cible/cible.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    EurToBtcPipe,
    PowerPipe,
    CustomPipe,
    NameEditorComponent,
    Demo6Component,
    ExoComponent,
    Exo1Component,
    MamyPipe,
    HighlightDirective,
    HighlightDynamicsDirective,
    ExosDirectiveComponent,
    TrimerDirective,
    TopPlayersComponent,
    PlayerComponent,
    Exo2Component,
    ArticleComponent,
    ListArticleComponent,
    Exo3Component,
    Demo8Component,
    ListeComponent,
    Demo9Component,
    Exo4Component,
    CibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
