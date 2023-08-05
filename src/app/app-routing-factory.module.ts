import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FactoryUserSelection } from "./Factory/factory-user-selection.component";
import { ProductionVsFactoryComponent } from "./production-vs-factory/production-vs-factory.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/production-vs-factory'},
  {path: 'production-vs-factory', component: ProductionVsFactoryComponent},
  {path: 'factory-user-selection', component: FactoryUserSelection}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingFactoryModule {

}
// ProductionVsFactoryComponent,
// FactoryUserSelection