import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  imagePath = "assets/ranks";
  imagePathRaw = "assets/ranks";
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
    this.updatePicture();
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
  updatePicture(): string {
    console.log("updatePicture Called");
    let lvl = this.dashboardUserLevel;
    switch (lvl) {
      case 1: {
        this.imagePath = this.imagePathRaw + "/0.svg";
        return this.imagePath;
      }
      case 2: {
        this.imagePath = this.imagePathRaw + "/2.svg";
        return this.imagePath;
      }
      case 3: {
        this.imagePath = this.imagePathRaw + "/3.svg";
        return this.imagePath;
      }
      case 4: {
        this.imagePath = this.imagePathRaw + "/4.svg";
        return this.imagePath;
      }
      case 5: {
        this.imagePath = this.imagePathRaw + "/5.svg";
        return this.imagePath;
      }
      case 6: {
        this.imagePath = this.imagePathRaw + "/6.svg";
        return this.imagePath;
      }
      default: {
        this.imagePath = this.imagePathRaw + "/max.svg";
        return this.imagePath;
      }
    }
  }

  ngOnInit() {
    this.getInformations();
  }
  getAchievements() {
    this.achievementList = this.userService.getAchievements();
  }
}
