import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormularService } from "./formular.service";
import { Formular } from "./formular";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"],
  providers: [FormularService]
})
export class FormularComponent implements OnInit {
  formulars: Formular[] = [];
  constructor(private formularService: FormularService) {}

  ngOnInit() {
    this.formularService.getFormular().subscribe(formulars => {
      this.formulars = formulars;
    });
  }

  onCreateFormular() {
    var newFormular = new Formular();
    newFormular.name = "Name";
    this.formularService.createFormular(newFormular).subscribe(newFormular => {
      this.formulars = this.formulars.concat(newFormular);
    });
  }
  getFormulars() {
    return this.formularService.getFormular();
  }
}
