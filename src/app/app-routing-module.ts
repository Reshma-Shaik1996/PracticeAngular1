import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding-component/databinding-component';
import { DirectiveSample } from './directive-sample/directive-sample';
import { Pipesample } from './pipesample/pipesample';

const routes: Routes = [
  {path:'DataBinding',component:DatabindingComponent},
  {path:'Directive',component:DirectiveSample},
  {path:'Pipes',component:Pipesample},
  {path:'',redirectTo:'DataBinding', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
