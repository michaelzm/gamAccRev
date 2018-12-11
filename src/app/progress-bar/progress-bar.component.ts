import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {
  progressCounter: number;

  constructor(private userService: UserService) {}

  getCounter() {
    this.progressCounter = this.userService.getUserCounter();
  }
  logToConsole() {
    console.log(this.progressCounter);
  }
  ngOnInit() {
    this.getCounter();
    this.logToConsole();
  }
}
