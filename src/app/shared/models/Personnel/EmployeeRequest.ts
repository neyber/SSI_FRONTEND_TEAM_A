export class EmployeeRequest {
  constructor(
    public identificationNumber: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public gender: string,
    public startDateInCompany: string,
    public roleId: number,
    public supervisorId: number,
    public departmentId: number,
    public healthConditionStartingAtCompany: string,
    public photoId: number
  ) {}
}
