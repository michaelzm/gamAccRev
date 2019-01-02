import { Component, OnInit } from "@angular/core";
import { AccessReviewComponent } from "../access-review/access-review.component";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  achievementList: string[];
  dashboardScore: number;
  dashboardCounter: number;
  dashboardUserName: string;
  dashboardUserFirstName: string;
  dashboardUserLevel: number;
  constructor(private userService: UserService) {}
  getInformations() {
    this.getScore();
    this.getCounter();
    this.getUserName();
    this.dashboardUserFirstName = this.userService.getUserFName();
    this.getUserLevel();
    this.getAchievements();
    console.log("console achievement" + this.achievementList);
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
  getUserLevel() {
    this.dashboardUserLevel = this.userService.getUserLevel();
  }

  ngOnInit() {
    this.getInformations();
  }
  getAchievements() {
    this.achievementList = this.userService.getAchievements();
  }
}
