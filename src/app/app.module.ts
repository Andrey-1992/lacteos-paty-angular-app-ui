import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingFactoryModule } from './app-routing-factory.module';

// import { AngularFireModule } from "@angular/fire";
// import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { environment } from "../environments/environment";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
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
import { FactoryProdOutputsSearch } from './Factory/FactoryProdOutputs/factory-prod-outputs-search.component';
import { FactoryProdOutputsOverview } from './Factory/FactoryProdOutputs/factory-prod-outputs-overview.component';
import { FactoryProdOutputsDetailView } from './Factory/FactoryProdOutputs/factory-prod-outputs-detail-view.component';
import { FactoryProdOutputsSearchOutbound } from './Factory/FactoryProdOutputs/factory-prod-outputs-search-outbound.component';
import { FactoryProdOutputsOverviewOutbound } from './Factory/FactoryProdOutputs/factory-prod-outputs-overview-outbound.component';

const firebaseConfig = {
  apiKey: "AIzaSyBxMWO4PxAkNrDDBQl4fu0KoKPAEYTxjy0",
  authDomain: "fabrica-produccion-database.firebaseapp.com",
  databaseURL: "https://fabrica-produccion-database-default-rtdb.firebaseio.com",
  projectId: "fabrica-produccion-database",
  storageBucket: "fabrica-produccion-database.appspot.com",
  messagingSenderId: "113232990741",
  appId: "1:113232990741:web:61c647185339031a75b41c",
  measurementId: "G-F14FS23JRG"
};

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
    FactoryProdInputsDetailView,
    FactoryProdOutputsSearch,
    FactoryProdOutputsOverview,
    FactoryProdOutputsDetailView,
    FactoryProdOutputsSearchOutbound,
    FactoryProdOutputsOverviewOutbound
  ],
  imports: [
    BrowserModule,
    AppRoutingFactoryModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [DataHandlingService],
  bootstrap: [AppComponent]
})

export class AppModule { }