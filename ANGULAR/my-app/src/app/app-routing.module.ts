import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { OneWayDBComponent } from './one-way-db/one-way-db.component';
import { ServDemoComponent } from './serv-demo/serv-demo.component';
import { ServDemo2Component } from './serv-demo2/serv-demo2.component';
import { StructDireComponent } from './struct-dire/struct-dire.component';
import { StyleDireComponent } from './style-dire/style-dire.component';
import { SwitchDireComponent } from './switch-dire/switch-dire.component';
import { TwoWayDBComponent } from './two-way-db/two-way-db.component';

//The Const Routes enables the ngModule Inport to connect to the RouterModule Root
//each Path object can be used in the main HTML doc to connect the component information to the Router
const routes: Routes = [
{path: 'firstComponent', component: NewCompComponent},
{path: 'pipeDemo', component: PipeDemoComponent},
{path: 'oneWay', component: OneWayDBComponent},
{path: 'twoWay', component: TwoWayDBComponent},
{path: 'structDire', component: StructDireComponent},
{path: 'switchDire', component: SwitchDireComponent},
{path: 'styleDire', component: StyleDireComponent},
{path: 'servDemo1', component: ServDemoComponent},
{path: 'servDemo2', component: ServDemo2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
