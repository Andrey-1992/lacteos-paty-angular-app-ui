import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FactoryAdminMenu } from "./Factory/factory-admin-menu.component";
import { FactoryUserSelection } from "./Factory/factory-user-selection.component";
import { FactoryAdminLogin } from "./Factory/FactoryAdmin/factory-admin-login.component";
import { FactoryProdInputsMenu } from "./Factory/FactoryProdInputs/factory-prod-inputs-menu.component";
import { FactoryProdMenu } from "./Factory/FactoryProdMenu/factory-prod-menu.component";
import { ProductionVsFactoryComponent } from "./production-vs-factory/production-vs-factory.component";

const appRoutes: Routes = [
  {path:'', redirectTo: '/production-vs-factory', pathMatch:'full'},
  {path: 'production-vs-factory', component: ProductionVsFactoryComponent},
  {path: 'factory-user-selection', component: FactoryUserSelection},
  {path: 'factory-admin-login', component: FactoryAdminLogin},
  {path: 'factory-menu', component: FactoryAdminMenu},
  {path: 'factory-prod', component: FactoryProdMenu},
  {path: 'factory-prod-inputs-menu', component: FactoryProdInputsMenu}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingFactoryModule {};
// FactoryProdMenu

