
export class SicknessRequest {
  constructor(
    public description: string,
    public dateSickness: string,
    public whereOccurr: string,
    public saClassificationId: number,
    public employeeId: number
  ) {}
}
