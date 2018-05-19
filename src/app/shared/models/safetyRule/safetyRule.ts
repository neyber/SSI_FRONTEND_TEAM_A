export class SafetyRule {
    constructor(
        public id: number,
        public policyCode: string,
        public policyName: string,
        public complianceParameter: number,
        public complianceMetric: number,
        public accomplishment: boolean
    ) { }
}
