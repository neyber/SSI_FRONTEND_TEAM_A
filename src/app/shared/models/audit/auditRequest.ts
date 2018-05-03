export class AuditRequest {
  constructor(
    public name: string,
    public code: string,
    public type: string,
    public scope: string,
    public objective: string,
    public criteria: string
  ) {}
}
