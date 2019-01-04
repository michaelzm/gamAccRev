import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  imagePath = "assets/rankimages/0.png";
  imagePathRaw = "assets/rankimages/";
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
        this.imagePath = this.imagePathRaw + "/1.png";
        return this.imagePath;
      }
      case 2: {
        this.imagePath = this.imagePathRaw + "/2.png";
        return this.imagePath;
      }
      case 3: {
        this.imagePath = this.imagePathRaw + "/3.png";
        return this.imagePath;
      }
      case 4: {
        this.imagePath = this.imagePathRaw + "/4.png";
        return this.imagePath;
      }
      case 5: {
        this.imagePath = this.imagePathRaw + "/5.png";
        return this.imagePath;
      }
      case 6: {
        this.imagePath = this.imagePathRaw + "/6.png";
        return this.imagePath;
      }
      case 7: {
        this.imagePath = this.imagePathRaw + "/7.png";
        return this.imagePath;
      }
      case 8: {
        this.imagePath = this.imagePathRaw + "/8.png";
        return this.imagePath;
      }
      case 9: {
        this.imagePath = this.imagePathRaw + "/9.png";
        return this.imagePath;
      }
      case 10: {
        this.imagePath = this.imagePathRaw + "/11.png";
        return this.imagePath;
      }
      default: {
        this.imagePath = this.imagePathRaw + "/12.png";
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
