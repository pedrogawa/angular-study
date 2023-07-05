import { Component } from "@angular/core";
import { Api } from "../api.module";
import { SharedService } from "../sharedService";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.scss"],
})
export class MainComponentComponent {
  constructor(private api: Api, private sharedService: SharedService) {}

  users: any = [];

  ngOnInit() {
    this.api.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(user: any) {
    this.sharedService.changeUser(user);
  }
}
