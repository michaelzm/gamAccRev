import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {
  progressCounter = 0;

  constructor(private userService: UserService) {}

  getCounter() {
    this.progressCounter = this.userService.getProgressBarCounter();
  }
  logToConsole() {
    //console.log(this.progressCounter);
  }
  updateProgressBar() {
    //("updated the progressbar");
    this.getCounter();
  }
  ngOnInit() {
    this.getCounter();
    this.logToConsole();
  }
}
