import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/data-binding/property-binding/property-binding.component';
import { ChildPropertyBindingComponent } from './components/data-binding/child-property-binding/child-property-binding.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ChildEventBindingComponent } from './components/data-binding/child-event-binding/child-event-binding.component';
import { StandardPipesComponent } from './components/pipes/standard-pipes/standard-pipes.component';
import { CustomPipe } from './components/pipes/custom-pipes/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ChildPropertyBindingComponent,
    HeaderComponent,
    ChildEventBindingComponent,
    StandardPipesComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
