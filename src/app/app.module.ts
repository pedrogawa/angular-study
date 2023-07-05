import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Api } from "./api.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditUserPageComponent } from "./edit-user-page/edit-user-page.component";
import { MainComponentComponent } from "./main-component/main-component.component";

@NgModule({
  declarations: [AppComponent, EditUserPageComponent, MainComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [Api],
  bootstrap: [AppComponent],
})
export class AppModule {}
