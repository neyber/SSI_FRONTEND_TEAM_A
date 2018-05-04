export class EmployeeRequest {
  constructor(
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
