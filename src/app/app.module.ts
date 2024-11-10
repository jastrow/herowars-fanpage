import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { AuthInterceptor } from '@lib/states/interceptors/auth-interceptor.service';
import { AuthState } from '@lib/states/auth/auth.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy, KeyValuePipe, NgForOf } from "@angular/common";
import { EditorModule } from '@tinymce/tinymce-angular';
import { ENVIRONMENT } from "@lib/util/tokens";
import { FooterComponent } from './lib/wireframe/footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/Auth/Login/Login.component';
import { NewlineToBrPipe } from "./lib/pipes/newlineToBr.pipe";
import { NgModule, ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { PasswordRecoverComponent } from '@pages/Auth/PasswordRecover/PasswordRecover.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Router, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { SubnavComponent } from "./lib/wireframe/Subnav/Subnav.component";
import { TextPageComponent } from '@lib/core/TextPage/TextPage.component';
import { TopnavComponent } from './lib/wireframe/topnav/topnav.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import environment from "../environment";
import {RouterLink, RouterLinkActive} from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ChangeUserComponent } from '@pages/Auth/ChangeUser/ChangeUser.component';
import { ImprintComponent } from '@pages/imprint/imprint.component';
import { KontaktComponent } from '@pages/Kontakt/Kontakt.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TopnavComponent,
        FooterComponent,
        LoginComponent,
        ChangeUserComponent,
        TextPageComponent,
        PasswordRecoverComponent,
        ImprintComponent,
        KontaktComponent,
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
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        EditorModule,
        FormsModule,
        HttpClientModule,
        KeyValuePipe,
        NewlineToBrPipe,
        NgForOf,
        NgxsModule.forRoot([AuthState]),
        NgxsStoragePluginModule.forRoot(),
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive,
        RouterModule,
        SubnavComponent,
        // PrimeNG
        ButtonModule,
        ChipModule,
        TagModule,
        MenubarModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
        FloatLabelModule,
        PasswordModule,
        DropdownModule,
        InputTextareaModule,
    ]
})
export class AppModule { }



