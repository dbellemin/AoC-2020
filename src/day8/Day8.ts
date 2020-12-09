import {readFile} from '../utils/readFile';
import {InstructionEnum, Step} from './Step';
import {Day} from '../Day';

export class Day8 extends Day {


    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        const visitedIndices = [];
        let index = 0;
        let acc = 0;
        while (visitedIndices.indexOf(index) === -1) {
            const currentStep = Step.parseStep(lines[index]);
            visitedIndices.push(index);
            if (currentStep.instruction === InstructionEnum.ACCUMULATOR) {
                acc += currentStep.value;
                index++;
            }
            if (currentStep.instruction === InstructionEnum.JUMP) {
                index += currentStep.value;
            }
            if (currentStep.instruction === InstructionEnum.NOPE) {
                index++;
            }
        }


        return acc;

    }


    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        const allSteps: Step[] = lines.map(l => Step.parseStep(l));
        let i = 0;
        for (let step of allSteps) {
            if (step.instruction === InstructionEnum.JUMP || step.instruction === InstructionEnum.NOPE) {
                const variation = this.getVariation(allSteps, i);
                const res = this.play(variation);
                if (res.index === variation.length) {
                    return res.acc;
                }
            }
            i++;
        }


        return -1;
    }

    private getVariation(allSteps: Step[], indexElementToUpdate: number): Step[] {
        return allSteps.map((s, index) => {
            if (index !== indexElementToUpdate) {
                return s;
            } else {
                if (s.instruction === InstructionEnum.JUMP) {
                    const newStep = new Step();
                    newStep.instruction = InstructionEnum.NOPE;
                    newStep.value = s.value;
                    return newStep;
                }
                if (s.instruction === InstructionEnum.NOPE) {
                    const newStep = new Step();
                    newStep.instruction = InstructionEnum.JUMP;
                    newStep.value = s.value;
                    return newStep;
                }
            }
        });
    }

    private play(steps: Step[]) {
        let index = 0;
        let acc = 0;
        let visitedIndices = [];
        while (visitedIndices.indexOf(index) === -1) {
            const currentStep = steps[index];
            visitedIndices.push(index);
            if (currentStep.instruction === InstructionEnum.ACCUMULATOR) {
                acc += currentStep.value;
                index++;
            }
            if (currentStep.instruction === InstructionEnum.JUMP) {
                index += currentStep.value;
            }
            if (currentStep.instruction === InstructionEnum.NOPE) {
                index++;
            }
            if (index >= steps.length) {
                return {index, acc};
            }
        }
        return {index, acc};
    }

    getDay(): number {
        return 8;
    }


}

