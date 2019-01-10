import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  badge = "1";
  badge2 = "1";
  isHidden = false;
  isHidden2 = false;
  resetBadge() {
    this.badge = "";
  }
  resetBadge2() {
    this.badge2 = "";
  }
  hideBadge() {
    this.isHidden = true;
  }
  showBadge() {
    this.isHidden = false;
  }
  hideBadge2() {
    this.isHidden2 = true;
  }
  showBadge2() {
    this.isHidden2 = false;
  }
  title = "angular-access-review";
}
