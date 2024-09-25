import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TitansComponent } from './Titans/titans.component';
import { TitanEditComponent } from './TitanEdit/TitanEdit.component';
import { TitanComponent } from './Titan/titan.component';

const routes: Routes = [
  {
    path: 'titans',
    component: TitansComponent
  },
  {
    path: 'edittitan/:id',
    component: TitanEditComponent,
    data: { title: 'Titan bearbeiten'},
  },
  {
    path: 'titanedit',
    component: TitanEditComponent
  },
  {
    path: 'titan/:id',
    component: TitanComponent,
    data: { title: 'Titan'},
  },
  {
    path: '**',
    component: TitansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class TitanRoutingModule { }
