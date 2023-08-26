import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FactoryMenu } from "./Factory/factory-admin-menu.component";
import { FactoryUserSelection } from "./Factory/factory-user-selection.component";
import { FactoryAdminLogin } from "./Factory/FactoryAdmin/factory-admin-login.component";
import { FactoryProdInputsMenu } from "./Factory/FactoryProdInputs/factory-prod-inputs-menu.component";
import { FactoryProdInputsSearch } from "./Factory/FactoryProdInputs/factory-prod-inputs-search.component";
import { FactoryProdMenu } from "./Factory/FactoryProdMenu/factory-prod-menu.component";
import { FactoryProdOutputsMenu } from "./Factory/FactoryProdOutputs/factory-prod-outputs-menu.component";
import { FactoryProdOutputsSearchOutbound } from "./Factory/FactoryProdOutputs/factory-prod-outputs-search-outbound.component";
import { FactoryProdOutputsSearch } from "./Factory/FactoryProdOutputs/factory-prod-outputs-search.component";
import { CreateCheeseDataInput } from "./Factory/FactoryShared/CheeseDataStructure/create-cheese-data-input";
import { ProductionVsFactoryComponent } from "./production-vs-factory/production-vs-factory.component";

const appRoutes: Routes = [
  {path:'', redirectTo: '/production-vs-factory', pathMatch:'full'},
  {path: 'production-vs-factory', component: ProductionVsFactoryComponent},
  {path: 'factory-user-selection', component: FactoryUserSelection},
  {path: 'factory-admin-login', component: FactoryAdminLogin},
  {path: 'factory-menu', component: FactoryMenu},
  {path: 'factory-prod', component: FactoryProdMenu},
  {path: 'factory-prod-inputs-menu', component: FactoryProdInputsMenu},
  {path: 'factory-prod-outputs-menu', component: FactoryProdOutputsMenu},
  {path: 'factory-prod-inputs-create', component: CreateCheeseDataInput},
  {path: 'factory-prod-inputs-search', component: FactoryProdInputsSearch},
  {path: 'factory-prod-outputs-search', component: FactoryProdOutputsSearch},
  {path: 'factory-prod-outputs-search-outbound', component: FactoryProdOutputsSearchOutbound}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingFactoryModule {};
