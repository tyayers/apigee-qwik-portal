export class Product {
  name: string;
  displayName: string;
  approvalType: string = "auto";
  environments: string[] = [];
  attributes: {name: string, value: string}[] = [];
  createdAt: string = "";
  lastModifiedAt: string = "";
  operationGroup: {operationConfigs: {apiSource: string, operations: {resource: string}[], operationConfigType: string}[]} = {
    operationConfigs: []
  };

  constructor(name: string, displayName: string) {
    this.name = name;
    this.displayName = displayName;
  }
}