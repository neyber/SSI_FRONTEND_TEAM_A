export class ExistingPpe {
  constructor(
    public id: number,
    public detail: string,
    public purchaseDate: string,
    public lifeTimeDays: number,
    public currentLifeTimeDays: number,
    public ppeId: number
  ) {}
}
