import { Employee } from "./employee";
import { AccessRightCollection } from "../accessRight/access-right-collection";
import { AccessRight } from "../accessRight/access-right";

var firstName: string[];
firstName = [
  "Peter",
  "Franz",
  "Julian",
  "Luis",
  "Alexander",
  "Heinz",
  "Moritz",
  "Maximilian",
  "Tobias",
  "Simon",
  "Lisa",
  "Sarah",
  "Eva",
  "Laura",
  "Tanja"
];

var lastName: string[];
lastName = [
  "Meier",
  "Huber",
  "Walter",
  "Wortmann",
  "Crawford",
  "Burkhart",
  "Foenilius",
  "Oberberg",
  "Biedinghaus",
  "Furst",
  "Sanger",
  "Koenig",
  "Waechter",
  "Nussbaum",
  "Lemann",
  "Becker",
  "Finkel",
  "Barth",
  "Seiler",
  "Baier"
];

var pos: string[];
pos = [
  "Werkstudent",
  "Festangestellt Materialwirtschaft",
  "Festangestellt Entwicklung",
  "Praktikant"
];

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
pushNameToList();

export { EMPLOYEES };
