import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeroComponent } from './hero/Hero/hero.component';
import { HeroesComponent } from './hero/Heroes/heroes.component';
import { LoginComponent } from './Login/Login.component';
import { HeroEditComponent } from './hero/HeroEdit/HeroEdit.component';
import { HeroteamsComponent } from './hero/Heroteams/Heroteams.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {title: 'Startseite'},
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    data: { title: 'Impressum'},
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    data: { title: 'Helden Liste'},
  },
  {
    path: 'hero/edithero/:id',
    component: HeroEditComponent,
    data: { title: 'Held bearbeiten'},
  },
  {
    path: 'hero/edithero',
    component: HeroEditComponent,
    data: { title: 'Held bearbeiten'},
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
    data: { title: 'Held'},
  },
  {
    path: 'heroteams',
    component: HeroteamsComponent,
    data: { title: 'Helden Teams'},
  },
  {
    path: 'heroteamsedit/:id',
    component: HeroteamsComponent,
    data: { title: 'Helden Teams'},
  },
  {
    path: 'heroteamsedit',
    component: HeroteamsComponent,
    data: { title: 'Helden Teams'},
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Startseite'},
  },
  {
    path: '**',
    component: WelcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
