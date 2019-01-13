import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-gamification-bottom-sheet",
  templateUrl: "./gamification-bottom-sheet.component.html",
  styleUrls: ["./gamification-bottom-sheet.component.css"]
})
export class GamificationBottomSheetComponent implements OnInit {
  level = 0;
  constructor(
    private userService: UserService,
    private ref: MatBottomSheetRef<GamificationBottomSheetComponent>
  ) {}

  ngOnInit() {
    this.getNewLevel();
  }

  getNewLevel() {
    this.level = this.userService.getUserLevel();
  }
}
