import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  badge = "1";
  isHidden = false;
  resetBadge() {
    this.badge = "";
  }
  hideBadge() {
    this.isHidden = true;
  }
  showBadge() {
    this.isHidden = false;
  }
  title = "angular-access-review";
}
