import { Component, OnInit } from "@angular/core";
import { AccessReviewComponent } from "../access-review/access-review.component";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  dashboardScore: number;
  dashboardCounter: number;
  dashboardUserName: string;
  dashboardUserFirstName: string;
  dashboardUserLevel: number;
  constructor(private userService: UserService) {}
  getInformations() {
    this.dashboardScore = this.userService.getUserScore();
    this.dashboardCounter = this.userService.getUserCounter();
    this.dashboardUserName = this.userService.getUserLName();
    this.dashboardUserFirstName = this.userService.getUserFName();
    this.dashboardUserLevel = this.userService.getUserLevel();
  }
  getScore() {
    this.dashboardScore = this.userService.getUserScore();
  }
  getCounter() {
    this.dashboardCounter = this.userService.getUserCounter();
  }

  getUserName() {
    this.dashboardUserName = this.userService.getUserLName();
  }

  ngOnInit() {
    this.getInformations();
  }
  calculateLevel(): string {
    if (this.dashboardScore < 10) {
      return "Level 1";
    } else if (this.dashboardScore > 10 && this.dashboardScore < 30) {
      return "Level 2";
    } else if (this.dashboardScore > 30 && this.dashboardScore < 70) {
      return "Level 3";
    }
  }
}
