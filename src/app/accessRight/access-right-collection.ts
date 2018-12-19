import { AccessRight } from "./access-right";

export class AccessRightCollection {
  accessRightCollection: AccessRight[];

  constructor(newAccessRight: AccessRight) {
    this.accessRightCollection.push(newAccessRight);
  }
}
