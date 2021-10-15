import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { StructDireComponent } from './struct-dire/struct-dire.component';
import { TextDireDirective } from './text-dire.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { SwitchDireComponent } from './switch-dire/switch-dire.component';
import { StyleDireComponent } from './style-dire/style-dire.component';
import { OneWayDBComponent } from './one-way-db/one-way-db.component';
import { TwoWayDBComponent } from './two-way-db/two-way-db.component';
import { ServDemoComponent } from './serv-demo/serv-demo.component';
import { ServDemo2Component } from './serv-demo2/serv-demo2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    StructDireComponent,
    TextDireDirective,
    PipeDemoComponent,
    WordCountPipe,
    SwitchDireComponent,
    StyleDireComponent,
    OneWayDBComponent,
    TwoWayDBComponent,
    ServDemoComponent,
    ServDemo2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
