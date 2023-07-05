import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private userSource = new BehaviorSubject<any | null>(null);
  selectedUser = this.userSource.asObservable();

  constructor() {}

  changeUser(user: any) {
    this.userSource.next(user);
  }
}
