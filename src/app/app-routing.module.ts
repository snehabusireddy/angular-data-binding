import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyBindingComponent } from './components/data-binding/property-binding/property-binding.component';
import { StandardPipesComponent } from './components/pipes/standard-pipes/standard-pipes.component';

const routes: Routes = [
  {
    path: 'data-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'pipes',
    component: StandardPipesComponent
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
