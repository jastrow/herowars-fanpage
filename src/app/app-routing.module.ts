import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { HeroComponent } from './pages/hero/Hero/hero.component';
import { HeroesComponent } from './pages/hero/Heroes/heroes.component';
import { LoginComponent } from './pages/Login/Login.component';
import { HeroEditComponent } from './pages/hero/HeroEdit/HeroEdit.component';
import { HeroteamsComponent } from './pages/hero/Heroteams/Heroteams.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeroteamsEditComponent } from './pages/hero/HeroteamsEdit/HeroteamsEdit.component';
import { HeroteamViewerComponent } from './pages/hero/HeroteamViewer/HeroteamViewer.component';

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
    path: 'heroteamviewer/:id',
    component: HeroteamViewerComponent,
    data: { title: 'Helden Team'},
  },
  {
    path: 'heroteamsedit/:id',
    component: HeroteamsEditComponent,
    data: { title: 'Helden Team bearbeiten'},
  },
  {
    path: 'heroteamsedit',
    component: HeroteamsEditComponent,
    data: { title: 'Helden Team erstellen'},
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
