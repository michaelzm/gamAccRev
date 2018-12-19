export class AccessRight {
  name: string;
  access: boolean;
  constructor(accessName: string, hasAccess: boolean) {
    this.name = accessName;
    this.access = hasAccess;
  }
}
