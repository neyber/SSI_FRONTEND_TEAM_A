export class AuditHistory {
  constructor(
    public idAuditHistory: number,
    public tableName: string,
    public columnName: string,
    public idFeature: number,
    public oldValue: string,
    public newValue: string,
    public createdDate: Date,
    public createdBy: number,
    public modifiedDate: Date,
    public modifiedBy: number
  ) {}
}
