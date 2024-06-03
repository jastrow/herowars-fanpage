import { CommonModule } from "@angular/common";
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '@lib/states/auth/auth.state';
import { HttpClientModule } from '@angular/common/http';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { TuiSvgModule} from '@taiga-ui/core';
import { TuiButtonModule} from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiInputModule, TuiTextareaModule} from '@taiga-ui/kit';
import { TuiDataListModule} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import { TuiNotificationModule} from '@taiga-ui/core';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TopnavComponent } from './lib/wireframe/topnav/topnav.component';
import { FooterComponent } from './lib/wireframe/footer/footer.component';
import { LoginComponent } from './pages/Login/Login.component';
import { SubnavComponent } from "./lib/wireframe/Subnav/Subnav.component";
import { NewlineToBrPipe } from "./lib/pipes/newlineToBr.pipe";
import { TuiTableModule } from "@taiga-ui/addon-table";
import { TuiLetModule } from "@taiga-ui/cdk";
import { ENVIRONMENT } from "@lib/util/tokens";
import environment from "../environment";

 
@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TopnavComponent,
        FooterComponent,
        LoginComponent,
    ],
    providers: [
        provideAnimationsAsync(),
        {
            provide: ENVIRONMENT,
            useValue: environment,
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxsModule.forRoot([AuthState]),
        NgxsStoragePluginModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextareaModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiSelectModule,
        TuiNotificationModule,
        TuiCheckboxBlockModule,
        TuiTableModule,
        TuiLetModule,
        SubnavComponent,
        NewlineToBrPipe,
    ]
})
export class AppModule { }
