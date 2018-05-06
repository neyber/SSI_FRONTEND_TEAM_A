export class ExistingPpeAssigned {
  constructor(
    public id: number,
    public AssignedNotes: string,
    public AssignedDate: string,
    public ReturnDate: string,
    public ReturnNotes: string,
    public existingPpeId: number,
    public employeeId: number
  ) {}
}
