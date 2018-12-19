import { AccessRightCollection } from "../accessRight/access-right-collection";

export class Employee {
  public lastName: string;
  public firstName: string;
  public position: string;
  public accessRights: AccessRightCollection;
}
