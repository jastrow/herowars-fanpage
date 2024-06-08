import { AbenteuerComponent } from '@pages/Abenteuer/Abenteuer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { LoginComponent } from './pages/Auth/Login/Login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegelnComponent } from '@pages/TextPages/Regeln.component';
import { MitgliederComponent } from '@pages/TextPages/Mitglieder.component';
import { TippsComponent } from '@pages/TextPages/Tipps.component';
import { PasswordRecoverComponent } from '@pages/Auth/PasswordRecover/PasswordRecover.component';

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
    path: 'passwordrecover',
    component: PasswordRecoverComponent,
  },
  {
    path: 'abenteuer',
    component: AbenteuerComponent,
  },
  {
    path: 'textseite',
    children: [
      {
        path: 'regeln',
        component: RegelnComponent,
      },
      {
        path: 'mitglieder',
        component: MitgliederComponent,
      },
      {
        path: 'tipps',
        component: TippsComponent,
      },    
    ]
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
