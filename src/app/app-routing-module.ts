import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding-component/databinding-component';
import { DirectiveSample } from './directive-sample/directive-sample';
import { Pipesample } from './pipesample/pipesample';
import { Personal } from './pipesample/personal/personal';
import { Education } from './pipesample/education/education';
import { Addcustomer } from './customer/addcustomer/addcustomer';

const routes: Routes = [
  {path:'DataBinding',component:DatabindingComponent},
  {path:'dir/:id',component:DirectiveSample},
  {path:'Pipes',component:Pipesample, children:[
    {path:'personal', component:Personal},
    {path:'education', component:Education}
  ]
  },
  {path:'DataSharing',component:Addcustomer},
  {path:'',redirectTo:'DataBinding', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//dynamic routing module for navigating between different components