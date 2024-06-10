import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { AuthInterceptor } from '@lib/states/interceptors/auth-interceptor.service';
import { AuthState } from '@lib/states/auth/auth.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from "@angular/common";
import { EditorModule } from '@tinymce/tinymce-angular';
import { ENVIRONMENT } from "@lib/util/tokens";
import { FooterComponent } from './lib/wireframe/footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/Auth/Login/Login.component';
import { NewlineToBrPipe } from "./lib/pipes/newlineToBr.pipe";
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { PasswordRecoverComponent } from '@pages/Auth/PasswordRecover/PasswordRecover.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Router, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { SubnavComponent } from "./lib/wireframe/Subnav/Subnav.component";
import { TextPageComponent } from '@lib/util/TextPage/TextPage.component';
import { TopnavComponent } from './lib/wireframe/topnav/topnav.component';
import { TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiInputModule, TuiInputPasswordModule, TuiTextareaModule} from '@taiga-ui/kit';
import { TuiDataListModule} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import { TuiLetModule } from "@taiga-ui/cdk";
import { TuiNotificationModule} from '@taiga-ui/core';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { TuiSvgModule} from '@taiga-ui/core';
import { TuiTableModule } from "@taiga-ui/addon-table";
import { WelcomeComponent } from './pages/welcome/welcome.component';
import environment from "../environment";
import { GildenkriegComponent } from '@pages/Gildenkrieg/Gildenkrieg.component';

 
@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TopnavComponent,
        FooterComponent,
        LoginComponent,
        TextPageComponent,
        PasswordRecoverComponent,
        GildenkriegComponent,
    ],
    providers: [
        provideAnimationsAsync(),
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        provideRouter(routes, withComponentInputBinding()),
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
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
        TuiInputPasswordModule,
        SubnavComponent,
        NewlineToBrPipe,
        EditorModule,
        TuiLinkModule,
    ]
})
export class AppModule { }
