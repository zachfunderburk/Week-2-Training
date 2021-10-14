import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { StructDireComponent } from './struct-dire/struct-dire.component';
import { TextDireDirective } from './text-dire.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { SwitchDireComponent } from './switch-dire/switch-dire.component';
import { FormsModule } from '@angular/forms';
import { StyleDireComponent } from './style-dire/style-dire.component';

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
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
