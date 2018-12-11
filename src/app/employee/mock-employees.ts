import { Employee } from "./employee";

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
pos = ["Werkstudent", "Praktikant", "Azubi", "Festangestellt"];

var mockAccessRight: string[];
mockAccessRight = ["Kontozugriff", "Adminterminal", "Eingangstür"];

const EMPLOYEES: Employee[] = [];
function pushNameToList() {
  for (var _i = 0; _i < 100; _i++) {
    var lnIndex = Math.floor(Math.random() * 19 + 1);
    var fnIndex = Math.floor(Math.random() * 14 + 1);
    var posIndex = Math.floor(Math.random() * 3 + 1);
    var accessIndex = Math.floor(Math.random() * 2 + 1);
    const newEmployee = new Employee();
    newEmployee.lastName = lastName[lnIndex];
    newEmployee.firstName = firstName[fnIndex];
    newEmployee.position = pos[posIndex];
    newEmployee.accessRight = mockAccessRight[accessIndex];
    EMPLOYEES.push(newEmployee);
  }
}
pushNameToList();

export { EMPLOYEES };
