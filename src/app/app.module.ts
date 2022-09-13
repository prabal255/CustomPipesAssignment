import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExponentialPipe } from './exponential.pipe';
import { ConversionToRuppePipe } from './conversion-to-ruppe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    ConversionToRuppePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
