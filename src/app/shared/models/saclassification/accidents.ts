
import {SaClassification} from './saClassification';
import {Role} from '../Personnel/Role';
export class Accidents {
  constructor(
    public  accidentId: number,
    public description: string,
    public  dateAccident: Date,
    public whereOccurr: string,
    public statusRecord: string,
    public saClassification: SaClassification[],
    public role: Role[]
    )
{}

}

