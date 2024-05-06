import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'hero/:id',
    component: HeroComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
