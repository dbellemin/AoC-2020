export class Step {


    instruction: InstructionEnum;
    value: number;

    static parseStep(line: string): Step {
        const lineSplitted = line.split(/(nop|acc|jmp) ((\+|\-)(\d+))/);
        const step = new Step();
        step.instruction = this.getInstruction(lineSplitted[1]);
        step.value = parseInt(lineSplitted[4]);
        if (lineSplitted[3] === '-') {
            step.value = step.value * -1;
        }
        return step;
    }

    static getInstruction(value): InstructionEnum {
        switch (value) {
            case 'jmp' : return InstructionEnum.JUMP;
            case 'acc' : return InstructionEnum.ACCUMULATOR;
            case 'nop' : return InstructionEnum.NOPE;
            default: console.log('Unknown instruction : ', value)

        }
    }
}

export enum InstructionEnum {
    JUMP,
    ACCUMULATOR,
    NOPE
}