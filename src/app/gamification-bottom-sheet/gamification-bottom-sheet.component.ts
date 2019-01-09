import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material";

@Component({
  selector: "app-gamification-bottom-sheet",
  template: "<div class = 'levelup'> <h2>🎉Neues Level erreicht!🎉</h2></div>",
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
