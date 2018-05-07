export class SaClassificationRequest {
  constructor(
    public category: string,
    public totalDaysOutOfWork: number,
    public totalDaysRestrictedTransferredWork: number,
    public type: string
  ) {}
}
