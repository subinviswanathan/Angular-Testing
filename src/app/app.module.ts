import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
