import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MissionService {
  challengeBadges = [];
  showFirst = true;
  showSecond = true;
  showThird = true;
  showFourth = true;

  //whether formualar should be displayeds
  showFormular = true;

  //displays if formular done or not
  formularDone = false;
  constructor() {}
  hideFirst() {
    this.showFirst = false;
  }
  hideSecond() {
    this.showSecond = false;
  }
  hideThird() {
    this.showThird = false;
  }
  hideFourth() {
    this.showFourth = false;
  }
  hideFormular() {
    this.showFormular = false;
  }
  getShowFirst() {
    return this.showFirst;
  }
  getShowSecond() {
    return this.showSecond;
  }
  getShowThird() {
    return this.showThird;
  }
  getShowFourth() {
    return this.showFourth;
  }
  getShowFormular() {
    return this.showFormular;
  }
  setFormularDone() {
    this.formularDone = true;
  }
  getFormularDone() {
    return this.formularDone;
  }
  setFirstBadge() {
    this.challengeBadges.push(77);
  }
  setSecondBadge() {
    this.challengeBadges.push(88);
  }
  setThirdBadge() {
    this.challengeBadges.push(99);
  }
  setFourthBadge() {
    this.challengeBadges.push(
      201,
      202,
      204,
      205,
      206,
      207,
      208,
      209,
      211,
      212,
      215,
      216,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245
    );
  }
  setFormularDoneBadge() {
    this.challengeBadges.push(111);
  }
  getChallengeBadges() {
    return this.challengeBadges;
  }
}
