import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material";

@Component({
  selector: "app-gamification-bottom-sheet",
  templateUrl: "./gamification-bottom-sheet.component.html",
  styleUrls: ["./gamification-bottom-sheet.component.css"]
})
export class GamificationBottomSheetComponent implements OnInit {
  constructor(
    private ref: MatBottomSheetRef<GamificationBottomSheetComponent>
  ) {}

  ngOnInit() {}
  basicClick() {
    this.ref.dismiss();
  }
}
