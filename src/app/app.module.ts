import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FactoryUserSelection } from './Factory/factory-user-selection.component';
import { ProductionVsFactoryComponent } from './production-vs-factory/production-vs-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionVsFactoryComponent,
    FactoryUserSelection
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
