import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FactoryUserSelection } from "./Factory/factory-user-selection.component";
import { FactoryAdminLogin } from "./Factory/FactoryAdmin/factory-admin-login.component";
import { FactoryAdminMenu } from "./Factory/FactoryAdmin/factory-admin-menu.component";
import { ProductionVsFactoryComponent } from "./production-vs-factory/production-vs-factory.component";

const appRoutes: Routes = [
  {path:'', redirectTo: '/production-vs-factory', pathMatch:'full'},
  {path: 'production-vs-factory', component: ProductionVsFactoryComponent},
  {path: 'factory-user-selection', component: FactoryUserSelection},
  {path: 'factory-admin-login', component: FactoryAdminLogin},
  {path: 'factory-admin', component: FactoryAdminMenu}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingFactoryModule {};
// FactoryAdminMenu
