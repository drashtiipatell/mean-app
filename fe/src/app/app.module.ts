import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { FormsModule } from '@angular/forms';
 import { ServiceService  } from './shared/service.service';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ListviewComponent } from './listview/listview.component';
import { UserService } from './shared/user.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mainpage', component: MainComponent },
  { path: 'list', component: ListComponent },
  { path: 'tab', component: TabComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sigin', component: SigninComponent },
  { path: 'listview', component: ListviewComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ListComponent,
    TabComponent,
    FormComponent,
    LoginComponent,
    SigninComponent,
    ListviewComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
