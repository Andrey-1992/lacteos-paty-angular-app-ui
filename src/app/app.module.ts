import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingFactoryModule } from './app-routing-factory.module';

import { AppComponent } from './app.component';
import { FactoryAdminMenu } from './Factory/factory-admin-menu.component';
import { FactoryUserSelection } from './Factory/factory-user-selection.component';
import { FactoryAdminLogin } from './Factory/FactoryAdmin/factory-admin-login.component';
import { FactoryProdInputsMenu } from './Factory/FactoryProdInputs/factory-prod-inputs-menu.component';
import { FactoryProdMenu } from './Factory/FactoryProdMenu/factory-prod-menu.component';
import { FactoryProdOutputsMenu } from './Factory/FactoryProdOutputs/factory-prod-outputs-menu.component';
import { ProductionVsFactoryComponent } from './production-vs-factory/production-vs-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionVsFactoryComponent,
    FactoryUserSelection,
    FactoryAdminLogin,
    FactoryAdminMenu,
    FactoryProdMenu,
    FactoryProdInputsMenu,
    FactoryProdOutputsMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingFactoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
