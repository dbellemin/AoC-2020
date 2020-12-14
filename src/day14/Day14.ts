import {readFile} from '../utils/readFile';
import {Day} from '../Day';
import {Instruction} from './Instruction';

export class Day14 extends Day {


    part1(): number {
        let lines = readFile(this.getFilePath());
        let mask = lines[0].split('mask = ')[1];
        let newInstructions: Instruction[] = [];
        for (let j = 0; j < lines.length; j++) {
            if (lines[j].startsWith('mask')) {
                mask = lines[j].split('mask = ')[1];
            } else {
                let lineSplitted = lines[j].split(/mem\[(\d+)\] = (\d+)/);
                let currentInstruction = new Instruction(parseInt(lineSplitted[1]), parseInt(lineSplitted[2]));

                let valueBin = currentInstruction.value.toString(2);
                let currentVal = this.applyMaskToValue(mask, valueBin);

                let indexNewInstruction = newInstructions.findIndex(ins => ins.index === currentInstruction.index);

                if (indexNewInstruction !== -1) {
                    newInstructions[indexNewInstruction] = new Instruction(currentInstruction.index, parseInt(currentVal, 2));
                } else {
                    newInstructions.push(new Instruction(currentInstruction.index, parseInt(currentVal, 2)))
                }
            }

        }
        return newInstructions.reduce((acc, instr) => {
            return acc += instr.value;
        }, 0);
    }

    applyMaskToValue(mask: string, value: string): string {
        value = value.padStart(mask.length, '0');

        let res = '';
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === 'X') {
                res += value[i]
            }
            if (mask[i] === '0') {
                res += '0'
            }
            if (mask[i] === '1') {
                res += '1';
            }
        }
        return res;


    }

    applyMaskToIndex(mask: string, index: string): string[] {
        index = index.padStart(mask.length, '0');

        let res = '';
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === 'X') {
                res += 'X'
            }
            if (mask[i] === '0') {
                res += index[i];
            }
            if (mask[i] === '1') {
                res += '1';
            }
        }
        let indices = this.buildIndices(res, 0, []);
        return indices;

    }

    buildIndices(index: string, k, res): string[] {
        //let k = 0;
        //let res = [];
        while (k < index.length) {
            if (index[k] === 'X') {
                let newIndex = index.substr(0, k) + '0' + index.substr(k + 1, index.length);
                if (newIndex.indexOf('X') === -1) {
                    res.push(newIndex);
                }
                this.buildIndices(newIndex, k + 1, res);

                let newIndex2 = index.substr(0, k) + '1' + index.substr(k + 1, index.length);
                if (newIndex2.indexOf('X') === -1) {
                    res.push(newIndex2);
                }

                this.buildIndices(newIndex2, k + 1, res);

                return res;
            } else {
                k++;
            }
        }

    }

    part2(): number {
        let lines = readFile(this.getFilePath(this.dayCode? this.dayCode : this.getDay()));
        let mask = lines[0].split('mask = ')[1];
        let newInstructions: Instruction[] = [];
        for (let j = 0; j < lines.length; j++) {
            if (lines[j].startsWith('mask')) {
                mask = lines[j].split('mask = ')[1];
            } else {
                let lineSplitted = lines[j].split(/mem\[(\d+)\] = (\d+)/);
                let currentInstruction = new Instruction(parseInt(lineSplitted[1]), parseInt(lineSplitted[2]));

                let indexBin = currentInstruction.index.toString(2);
                let newIndices: string[] = this.applyMaskToIndex(mask, indexBin);


                for (let ind of newIndices) {
                    let indice = parseInt(ind, 2);
                    let indexNewInstruction = newInstructions.findIndex(ins => ins.index === indice);

                    if (indexNewInstruction !== -1) {
                        newInstructions[indexNewInstruction] = new Instruction(indice, currentInstruction.value);
                    } else {
                        newInstructions.push(new Instruction(indice, currentInstruction.value));
                    }
                }

            }

        }
        return newInstructions.reduce((acc, instr) => {
            return acc += instr.value;
        }, 0);
    }
    dayCode : number;

    getDay(): number {
        return 14;
    }


}

