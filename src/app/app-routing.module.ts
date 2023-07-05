import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserPageComponent } from "./edit-user-page/edit-user-page.component";
import { MainComponentComponent } from "./main-component/main-component.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponentComponent,
  },
  {
    path: "user/:id",
    component: EditUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
