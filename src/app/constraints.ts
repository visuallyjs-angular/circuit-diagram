export interface InputRule {
    min: number;
    max: number;
}

export const LOGIC_GATE_INPUT_RULES: Record<string, InputRule> = {
    "and-gate": {
        min: 2,
        max: 8
    },
    "or-gate": {
        min: 2,
        max: 8
    },
    "not-gate": {
        min: 1,
        max: 1
    },
    "nand-gate": {
        min: 2,
        max: 8
    },
    "nor-gate": {
        min: 2,
        max: 8
    },
    "xor-gate": {
        min: 2,
        max: 2
    },
    "xnor-gate": {
        min: 2,
        max: 2
    }
};
