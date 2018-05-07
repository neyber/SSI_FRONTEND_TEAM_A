export class WorkItem {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public workItemClassificationId: number
  ) {}
}
