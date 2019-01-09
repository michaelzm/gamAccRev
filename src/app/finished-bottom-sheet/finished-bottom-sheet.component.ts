import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material";

@Component({
  selector: "app-finished-bottom-sheet",
  templateUrl: "./finished-bottom-sheet.component.html",
  styleUrls: ["./finished-bottom-sheet.component.css"]
})
export class FinishedBottomSheetComponent implements OnInit {
  constructor(private ref: MatBottomSheetRef<FinishedBottomSheetComponent>) {}

  ngOnInit() {}
  basicClick() {
    this.ref.dismiss();
  }
}
