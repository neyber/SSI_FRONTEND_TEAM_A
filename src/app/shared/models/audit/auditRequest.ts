export class AuditRequest {
  constructor(
    public auditName: string,
    public auditCode: string,
    public auditType: string,
    public auditScope: string,
    public auditObjective: string,
    public auditCriteria: string,
    public periodicity: string,
    public employeeId: number,
    public departmentId: number
  ) {}
}
