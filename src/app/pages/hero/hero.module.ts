import { AuthState } from '@lib/states/auth/auth.state';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './Hero/hero.component';
import { HeroEditComponent } from './HeroEdit/HeroEdit.component';
import { HeroesComponent } from './Heroes/heroes.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroteamsComponent } from "./Heroteams/Heroteams.component";
import { HeroteamsEditComponent } from "./HeroteamsEdit/HeroteamsEdit.component";
import { HeroteamViewerComponent } from "./HeroteamViewer/HeroteamViewer.component";
import { HttpClientModule } from '@angular/common/http';
import { NewlineToBrPipe } from "@lib/pipes/newlineToBr.pipe";
import { NgModule } from "@angular/core";
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { RouterModule } from '@angular/router';
import { SubnavComponent } from "@lib/wireframe/Subnav/Subnav.component";
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        HeroComponent,
        HeroEditComponent,
        HeroesComponent,
        HeroteamsComponent,
        HeroteamsEditComponent,
        HeroteamViewerComponent,
    ],
    bootstrap: [HeroComponent],
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        HttpClientModule,
        NewlineToBrPipe,
        NgxsModule.forRoot([AuthState]),
        NgxsStoragePluginModule.forRoot(),
        ReactiveFormsModule,
        RouterModule,
        SubnavComponent,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        ConfirmDialogModule,
        ToastModule,
        TranslateModule,
    ],
    providers: [
        ConfirmationService,
        MessageService,
    ],
})
export class HeroModule { }
