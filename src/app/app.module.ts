import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './theme/navigation-menu/navigation-menu.component';
import { CleanLayoutComponent } from './theme/clean-layout/clean-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    CleanLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
