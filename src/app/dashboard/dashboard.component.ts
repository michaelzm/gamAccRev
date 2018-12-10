import { Component, OnInit } from '@angular/core';
import { AccessReviewComponent } from '../access-review/access-review.component';
import { UserService} from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardScore: number;
  dashboardCounter: number;
  dashboardUserName: string;
  constructor(private userService: UserService) { }

  getScore(){
    this.dashboardScore = this.userService.getUserScore();

  }
  getCounter(){
    this.dashboardCounter = this.userService.getUserCounter();
  }

  getUserName(){
    this.dashboardUserName = this.userService.getUserLName();
  }

  ngOnInit() {
    this.getCounter();
    this.getScore();
    this.getUserName();
  }

}
