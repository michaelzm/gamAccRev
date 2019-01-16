import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
//class changes during implementation to more of a startingscreen
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}
  showFormField: boolean;
  ngOnInit() {
    this.checkIfShowFormField();
  }

  login(name: HTMLInputElement) {
    this.userService.setUserLastName(name.value);
    return false;
  }
  checkIfShowFormField() {
    if (this.userService.getUserLName() == "DefaultUsername") {
      //console.log("show the username field = true");
      this.showFormField = true;
    } else {
      //console.log("show the username field = false");
      this.showFormField = false;
    }
  }
}
