import { Component, OnInit } from "@angular/core";
import { Competitor } from "./competitor";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements OnInit {
  rankings: Competitor[] = [];

  createMutlipleCompetitors() {
    for (var i = 0; i < 10; i++) {
      var newCompetitor = new Competitor();
      newCompetitor.userLevel = i;
      newCompetitor.user_counter = i * 10;
      newCompetitor.user_lastName = "" + i;
      this.rankings.push(newCompetitor);
    }
    console.log(this.rankings);
  }

  ngOnInit() {
    this.createMutlipleCompetitors();
    this.addUserToRanking();
  }
  constructor(private userService: UserService) {}

  addUserToRanking() {
    var userAsCompetitor = new Competitor();
    userAsCompetitor.userLevel = this.userService.getUserLevel();
    userAsCompetitor.user_lastName = this.userService.getUserLName();
    userAsCompetitor.user_counter = this.userService.getUserCounter();
    this.rankings.push(userAsCompetitor);
  }
  sortedRankings(): Competitor[]{
    return this.rankings.sort((a, b) => a.userLevel > b.userLevel ? -1 : a.userLevel < b.userLevel ? 1: 0)
}



/*
const EMPLOYEES: Employee[] = [];
function pushNameToList() {
  for (var _i = 0; _i < 100; _i++) {
    var lnIndex = Math.floor(Math.random() * 19);
    var fnIndex = Math.floor(Math.random() * 14);
    var posIndex = Math.floor(Math.random() * 3);
    const newEmployee = new Employee();
    newEmployee.lastName = lastName[lnIndex];
    newEmployee.firstName = firstName[fnIndex];
    newEmployee.position = pos[posIndex];
    newEmployee.accessRights = new AccessRightCollection();
    newEmployee.beenChecked = false;
    EMPLOYEES.push(newEmployee);
  }
}
*/
