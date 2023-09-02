import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { ExoComponent } from './components/exo/exo.component';
import { Exo1Component } from './components/exo/exo1/exo1.component';
import { Exo2Component } from './components/exo/exo2/exo2.component';
import { Exo3Component } from './components/exo/exo3/exo3.component';
import { TopPlayersComponent } from './components/demo/topPlayers/top-players.component';
import { ExosDirectiveComponent } from './components/exo/exos-directive/exos-directive.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Exo4Component } from './components/exo/exo4/exo4.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'demo', component : DemoComponent, children:[
    {path: 'demo1', component : Demo1Component},
    {path: 'demo2', component : Demo2Component},
    {path: 'demo3', component : Demo3Component},
    {path: 'demo4', component : Demo4Component},
    {path: 'demo5', component : Demo5Component},
    {path: 'demo6', component : Demo6Component},
    {path: 'topPlayers', component : TopPlayersComponent},
    {path: 'demo8', component : Demo8Component},
    {path: 'demo9', component : Demo9Component}
    ]},
  { path: 'exo', component: ExoComponent, children:[
    {path:'exo1', component: Exo1Component},
    {path:'exo2', component: Exo2Component},
    {path:'exo3', component: Exo3Component},
    {path:'exo4', component: Exo4Component},
    {path: 'exosdirective', component: ExosDirectiveComponent}
   
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
