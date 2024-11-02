import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Hero/hero.component';
import { HeroesComponent } from './Heroes/heroes.component';
import { HeroEditComponent } from './HeroEdit/HeroEdit.component';
import { HeroteamsComponent } from './Heroteams/Heroteams.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeroteamsEditComponent } from './HeroteamsEdit/HeroteamsEdit.component';
import { HeroteamViewerComponent } from './HeroteamViewer/HeroteamViewer.component';

const routes: Routes = [
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
    data: { title: 'Held erstellen'},
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
    path: '**',
    component: HeroesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class HeroRoutingModule { }
