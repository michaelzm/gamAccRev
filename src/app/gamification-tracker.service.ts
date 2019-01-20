import { Injectable } from "@angular/core";
import { UserService } from "./user/user.service";
import { AccessReviewComponent } from "./access-review/access-review.component";

@Injectable({
  providedIn: "root"
})
export class GamificationTrackerService {
  currentReviewCount: number;

  constructor(
    private userService: UserService,
    private accessReview: AccessReviewComponent
  ) {}

  ngOnInit() {}

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
}
