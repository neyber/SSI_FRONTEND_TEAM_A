
export class AccidentRequest {
  constructor(
    public description: string,
    public dateAccident: string,
    public whereOccurr: string,
    public totalDaysOutOfWork: number,
    public totalDaysRestrictedTransferredWork: number,
    public saCategoryId: number,
    public saTypeId: number,
    public employeeId: number
  ) {}
}
