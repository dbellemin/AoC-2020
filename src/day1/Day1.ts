import {readFile} from '../utils/readFile';
import {Day} from '../Day';

export class Day1 extends Day {

    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        for (let line of lines) {
            for (let line2 of lines) {
                const sum: number = parseInt(line) + parseInt(line2);
                if (sum === 2020) {
                    return parseInt(line) * parseInt(line2);

                }
            }
        }

    }

    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        for (let line of lines) {
            for (let line2 of lines) {
                for (let line3 of lines) {
                    const sum: number = parseInt(line) + parseInt(line2) + parseInt(line3);
                    if (sum === 2020) {
                        return parseInt(line) * parseInt(line2) * parseInt(line3);
                    }
                }
            }
        }
    }

    getDay(): number {
        return 1;
    }
}
