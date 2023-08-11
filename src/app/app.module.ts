import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingFactoryModule } from './app-routing-factory.module';

import { AppComponent } from './app.component';
import { FactoryMenu } from './Factory/factory-admin-menu.component';
import { FactoryUserSelection } from './Factory/factory-user-selection.component';
import { FactoryAdminLogin } from './Factory/FactoryAdmin/factory-admin-login.component';
import { FactoryProdInputsMenu } from './Factory/FactoryProdInputs/factory-prod-inputs-menu.component';
import { FactoryProdMenu } from './Factory/FactoryProdMenu/factory-prod-menu.component';
import { FactoryProdOutputsMenu } from './Factory/FactoryProdOutputs/factory-prod-outputs-menu.component';
import { CreateCheeseDataInput } from './Factory/FactoryShared/CheeseDataStructure/create-cheese-data-input';
import { FactoryDynamicMenus } from './Factory/FactoryShared/factory-dynamic-menus.component';
import { ProductionVsFactoryComponent } from './production-vs-factory/production-vs-factory.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductionVsFactoryComponent,
    FactoryDynamicMenus,
    FactoryUserSelection,
    FactoryAdminLogin,
    FactoryMenu,
    FactoryProdMenu,
    FactoryProdInputsMenu,
    FactoryProdOutputsMenu,
    CreateCheeseDataInput
  ],
  imports: [
    BrowserModule,
    AppRoutingFactoryModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
