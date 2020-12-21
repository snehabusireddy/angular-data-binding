import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';


const routes: Routes = [
  {
    path: 'data-binding',
    component: PropertyBindingComponent
  },
  {
    path: '**',
    component: PropertyBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
