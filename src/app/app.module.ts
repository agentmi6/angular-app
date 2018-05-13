import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {ServerComponent} from './server/server.component';
import {HeaderComponent} from './header/header.componenet';
import {FooterComponent} from './footer/footer.component';
import { ServersComponent } from './servers/servers.component';
import {PracticeComponent} from './practice/practice.component';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from './task/task.component';



const appRoutes: Routes = [
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    FooterComponent,
    ServersComponent,
    PracticeComponent,
    TaskComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
