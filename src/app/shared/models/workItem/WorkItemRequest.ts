export class WorkItemRequest {
  constructor(
    public name: string,
    public description: string,
    public workItemClassificationId: number
  ) {}
}
