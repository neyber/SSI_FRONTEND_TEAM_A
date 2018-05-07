export class EmployeeResponse {
  constructor(
    public employeeId: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public gender: string,
    public startDateAtCompany: string,
    public roleId: number,
    public supervisor: number,
    public departmentId: number,
    public healthConditionStartingAtCompany: string

  ) {}
}
