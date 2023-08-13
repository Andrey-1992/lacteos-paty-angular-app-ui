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
import { DataHandlingService } from './Factory/FactoryShared/FactoryProdDatastorage/factory-prod-data-handling.service';
import { FactoryProdInputsSearch } from './Factory/FactoryProdInputs/factory-prod-inputs-search.component';
import { FactoryProdInputsOverview } from './Factory/FactoryProdInputs/factory-prod-inputs-overview.component';
import { FactoryProdInputsDetailView } from './Factory/FactoryProdInputs/factory-prod-inputs-detail-view.component';

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
    CreateCheeseDataInput,
    FactoryProdInputsSearch,
    FactoryProdInputsOverview,
    FactoryProdInputsDetailView
  ],
  imports: [
    BrowserModule,
    AppRoutingFactoryModule,
    HttpClientModule 
  ],
  providers: [DataHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
