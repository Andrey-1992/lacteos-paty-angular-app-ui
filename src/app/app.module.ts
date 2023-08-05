import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductionVsFactoryComponent } from './production-vs-factory/production-vs-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionVsFactoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
