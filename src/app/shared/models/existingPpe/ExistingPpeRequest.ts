export class ExistingPpeRequest {
  constructor(
    public detail: string,
    public purchaseDate: string,
    public lifeTimeDays: number,
    public currentLifeTimeDays: number,
    public ppeId: number
  ) {}
}
