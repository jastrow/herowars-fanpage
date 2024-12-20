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
import { TitansComponent } from './Titans/titans.component';
import { TitanRoutingModule } from './titan-routing.module';
import { TitanEditComponent } from './TitanEdit/TitanEdit.component';
import { TitanComponent } from './Titan/titan.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

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
        DropdownModule,
        ButtonModule,
        InputTextareaModule,
        InputTextModule,
        ConfirmDialogModule,
        ToastModule,
    ],
    providers: [
        ConfirmationService,
        MessageService,
    ],
})
export class TitanModule { }
