import { Injectable } from "@angular/core";
import { UserService } from "./user/user.service";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Injectable({
  providedIn: "root"
})
export class GamificationTrackerService {
  currentReviewCount: number;
  currentLevel: number;
  emojiArray = ["✅", "📈", "🚀", "🥂", "🔥", "🎓", "🤓"];

  constructor(
    private dashboard: DashboardComponent,
    private userService: UserService,
    private accessReview: AccessReviewComponent
  ) {}
  // "main"method which includes checking every possible popup
  checkForGamificationPopup() {
    //console.log("Check for Gamification");
    this.checkForThreeReviews();
    this.checkIfXPBarFull();
  }
  //shows popup if fulfilled
  checkForThreeReviews() {
    var arrayPos = Math.floor(Math.random() * this.emojiArray.length);
    var emojiSymbol = this.emojiArray[arrayPos];
    if (this.userService.getUserCounter() % 3 == 0) {
      this.openGamificationBar(
        emojiSymbol + " Erfolgreich 3 Berechtigungen geprüft " + emojiSymbol
      );
    }
  }
  //sets button to enabled to be clickable by user
  checkIfAuthorizedForEvaluation() {
    //console.log("check if authorized");
    if (this.userService.getUserCounter() == 25) {
      this.accessReview.buttonDisabled = false;
      this.accessReview.openBottomSheetAuthorized();
      this.userService.setUserAuthorized();
      return true;
    }
    return false;
  }

  //xpbar full means level up
  checkIfXPBarFull() {
    if (this.userService.getProgressBarCounter() == 10) {
      this.userService.setProgressBarCounter(0);
      this.userService.increaseLevel();
      this.accessReview.openBottomSheet();
      this.addAchievement("level");
    }
  }
  //not in use atm
  checkIfMissionCompleted() {
    if (this.userService.getUserCounter() == 10) {
      this.openGamificationBar(
        "Mission erfolgreich abgeschlossen! Neue Mission verfügbar.."
      );
      this.addAchievement("mission");
    }
  }
  //adds achievement to user profile
  addAchievement(type: string) {
    var newAchievementText: string;
    var counter: number;
    var level: number;
    switch (type) {
      case "mission": {
        counter = this.userService.getUserCounter();
        newAchievementText =
          "Erfolgreich " + counter + " Berechtigungen geprüft";
      }
      case "level": {
        level = this.userService.getUserLevel();
        newAchievementText = "Level " + level + " erreicht";
      }
      default: {
        break;
      }
    }
    this.userService.addAchievement(newAchievementText);
    this.dashboard.getAchievements();
  }

  ngOnInit() {}
  openGamificationBar(message: string) {
    this.accessReview.openGamificationBar(message);
  }
}
