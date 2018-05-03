export class SaClassification {
  constructor(
    public id: number,
    public category: string,
    public totalDaysOutOfWork: number,
    public totalDaysRestrictedTransferredWork: number,
    public type: string
  ) {}
}
