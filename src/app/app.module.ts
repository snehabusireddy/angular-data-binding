import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ChildPropertyBindingComponent } from './components/child-property-binding/child-property-binding.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ChildEventBindingComponent } from './components/child-event-binding/child-event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ChildPropertyBindingComponent,
    HeaderComponent,
    ChildEventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
