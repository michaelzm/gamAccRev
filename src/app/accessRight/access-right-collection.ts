import { AccessRight } from "./access-right";

export class AccessRightCollection {
  erp: string;
  excel: string;
  cal: string;
  code: string;
  hasErp: boolean;
  hasExcel: boolean;
  hasCal: boolean;
  hasCode: boolean;
  constructor() {
    /*
    accessRights vordefiniert
    */
    this.erp = "ERP-Software benutzen";
    this.excel = "Excel-Tabellen verändern";
    this.cal = "Kalender einsehen";
    this.code = "Quellcode einsehen";

    /*
    accessRight Berechtigungen
    */
    this.hasErp = false;
    this.hasExcel = false;
    this.hasCal = false;
    this.hasCode = false;
  }
}
