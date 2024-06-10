import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { LoginComponent } from './pages/Auth/Login/Login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PasswordRecoverComponent } from '@pages/Auth/PasswordRecover/PasswordRecover.component';
import { TextPageComponent } from '@lib/util/TextPage/TextPage.component';
import { GildenkriegComponent } from '@pages/Gildenkrieg/Gildenkrieg.component';

export const routes: Routes = [
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
    path: 'page/:id',
    component: TextPageComponent,
  },
  {
    path: 'gildenkrieg',
    component: GildenkriegComponent
  },
  {
    path: '**',
    component: WelcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, bindToComponentInputs: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
