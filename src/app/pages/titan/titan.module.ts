import { AuthState } from '@lib/states/auth/auth.state';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TitansComponent } from './Titans/titans.component';
import { TitanRoutingModule } from './titan-routing.module';
import { TitanEditComponent } from './TitanEdit/TitanEdit.component';
import { TitanComponent } from './Titan/titan.component';
 
@NgModule({
    declarations: [
        TitansComponent,
        TitanEditComponent,
        TitanComponent,
    ],
    bootstrap: [TitansComponent],
    imports: [
        TitanRoutingModule,
        CommonModule,
        FormsModule,
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
export class TitanModule { }
