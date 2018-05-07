export class Sickness {
  constructor(
    public id: number,
    public description: string,
    public dateSickness: string,
    public whereOccurr: string,
    public saClassificationId: number,
    public employeeId: number
  ) {}
}
