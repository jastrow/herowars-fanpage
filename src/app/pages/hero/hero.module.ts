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
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiInputModule, TuiTextareaModule } from '@taiga-ui/kit';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiLetModule } from "@taiga-ui/cdk";
import { TuiNotificationModule } from '@taiga-ui/core';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiTableModule } from "@taiga-ui/addon-table";

 
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
        TuiAlertModule,
        TuiButtonModule,
        TuiCheckboxBlockModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiDialogModule,
        TuiInputModule,
        TuiLetModule,
        TuiNotificationModule,
        TuiRootModule,
        TuiSelectModule,
        TuiSvgModule,
        TuiTableModule,
        TuiTextareaModule,
    ]
})
export class HeroModule { }
