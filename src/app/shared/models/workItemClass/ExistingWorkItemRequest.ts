export class ExistingWorkItemRequest{
  constructor(
    public detail: string,
    public purchaseDate: string,
    public workItemId: number
  ) {}
}
