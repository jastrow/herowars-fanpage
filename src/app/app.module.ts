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
import { AuthState } from './Login/auth.state';
import { HttpClientModule } from '@angular/common/http';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { TuiSvgModule} from '@taiga-ui/core';
import { TuiButtonModule} from '@taiga-ui/core';
import { TuiInputModule, TuiTextareaModule} from '@taiga-ui/kit';
import { TuiDataListModule} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import { TuiNotificationModule} from '@taiga-ui/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { TopnavComponent } from './wireframe/topnav/topnav.component';
import { FooterComponent } from './wireframe/footer/footer.component';
import { HeroComponent } from './hero/Hero/hero.component';
import { HeroesComponent } from './hero/Heroes/heroes.component';
import { HeroEditComponent } from './hero/HeroEdit/HeroEdit.component';
import { LoginComponent } from './Login/Login.component';
import { SubnavComponent } from "./wireframe/Subnav/Subnav.component";
import { HeroteamsComponent } from "./hero/Heroteams/Heroteams.component";

 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TopnavComponent,
    FooterComponent,
    HeroComponent,
    HeroesComponent,
    HeroEditComponent,
    LoginComponent,
    HeroteamsComponent,
  ],
  imports: [
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
    SubnavComponent,
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
