import { AbenteuerComponent } from '@pages/Abenteuer/Abenteuer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { LoginComponent } from './pages/Login/Login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'hero',
    loadChildren: () => import('./pages/hero/hero.module').then(m => m.HeroModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'abenteuer',
    component: AbenteuerComponent,
  },
  {
    path: '**',
    component: WelcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
