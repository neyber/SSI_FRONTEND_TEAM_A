export class SafetyRuleRequest {
    constructor(
        public policyCode: string,
        public policyName: string,
        public complianceParameter: number,
        public complianceMetric: number,
        public accomplishment: boolean
    ) { }
}
