import {Role} from './Role';

export class Employee {
  constructor(
    public employeeId: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public gender: string,
    public startDateAtCompany: string,
    public role: Role,
    public supervisor: number,
    public departmentId: number,
    public healthConditionStartingAtCompany: string

  ) {
    this.role = new Role(0, '', '');
  }
}
