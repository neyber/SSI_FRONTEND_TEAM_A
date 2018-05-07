import {Role} from './Role';

export class Employee {
  constructor(
    public employeeId: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public gender: string,
    public startDateInCompany: string,
    public roleId: number,
    public departmentId: number,
    public supervisor: number,
    public healthConditionStartingAtCompany: string

  ) {}
}
