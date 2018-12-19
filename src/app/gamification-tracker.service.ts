import { Injectable } from "@angular/core";
import { UserService } from "./user/user.service";
import { AccessReviewComponent } from "./access-review/access-review.component";

@Injectable({
  providedIn: "root"
})
export class GamificationTrackerService {
  currentScore: number;
  currentReviewCount: number;
  currentLevel: number;

  constructor(
    private userService: UserService,
    private accessReview: AccessReviewComponent
  ) {}

  checkForGamificationPopup() {
    this.checkForFiveReviews();
  }
  checkForFiveReviews() {
    if (this.userService.getUserCounter() % 10 == 0) {
      this.openGamificationBar("Erfolgreich 5 Berechtigungen geprüft");
    }
  }

  ngOnInit() {}
  openGamificationBar(message: string) {
    this.accessReview.openGamificationBar(message);
  }
}
