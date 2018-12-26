import { Component, OnInit, Input } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConfigService } from "../config/config.service";
import { Formular } from "./formular";
import { endTimeRange } from "@angular/core/src/profile/wtf_impl";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  hasbeenSubmitted = false;
  submitFormular: Formular;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  /*
  atm not working as expected
  */
  constructor(private config: ConfigService) {}
  onInputChange(event: any, slider: number) {
    console.log("slider b4 if" + slider);
    if (slider == 1) {
      this.rating1 = event.value;
    } else if (slider == 2) {
      this.rating2 = event.value;
    } else if (slider == 3) {
      this.rating3 = event.value;
    } else if (slider == 4) {
      this.rating4 = event.value;
    } else {
      console.log("error occured, slider not registered");
    }
    console.log("sliderval" + event.value);
  }

  ngOnInit() {}
  onSubmitEvaluation() {
    if (this.hasbeenSubmitted == false) {
      console.log("starte submit");
      this.submitFormular = new Formular();
      this.submitFormular.name = "Landodger";
      this.submitFormular.rating1 = this.rating1;
      this.submitFormular.rating2 = this.rating2;
      this.submitFormular.rating3 = this.rating2;
      this.submitFormular.rating4 = this.rating2;
      console.log(this.submitFormular);
      console.log(this.submitFormular);
      this.config.postConfig(this.submitFormular).subscribe();
      this.hasbeenSubmitted = true;
    }
  }
}
