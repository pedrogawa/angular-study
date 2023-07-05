import { Component } from "@angular/core";
import { SharedService } from "../sharedService";

@Component({
  selector: "app-edit-user-page",
  templateUrl: "./edit-user-page.component.html",
  styleUrls: ["./edit-user-page.component.scss"],
})
export class EditUserPageComponent {
  user: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedUser.subscribe((user) => (this.user = user));
  }
}
