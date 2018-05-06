export class ExistingPpeAssignedRequest {
  constructor(
    public assignedNotes: string,
    public assignedDate: string,
    public returnDate: string,
    public returnNotes: string,
    public existingPpeId: number,
    public employeeId: number
  ) {}
}
