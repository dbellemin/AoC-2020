import {readFile} from '../utils/readFile';
import {Day} from '../Day';


export class Day2 extends Day {
    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        let total = 0;
        for (let line of lines) {
            const lineSplitted = line.split(/(\d+)-(\d+) ([a-z]): ([a-z]+)/);
            const borneInf: number = parseInt(lineSplitted[1]);
            const borneSup: number = parseInt(lineSplitted[2]);
            const charac: string = lineSplitted[3];
            const password: string = lineSplitted[4];

            if (this.validPolicy1(borneInf, borneSup, charac, password)) {
                total++;
            }

        }
        return total;

    }

    validPolicy1(borneInf: number, borneSup: number, charac: string, password: string): boolean {
        const nbOccurences = (password.split(charac).length - 1);
        return nbOccurences >= borneInf && nbOccurences <= borneSup;
    }

    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        let total = 0;
        for (let line of lines) {
            const lineSplitted = line.split(/(\d+)-(\d+) ([a-z]): ([a-z]+)/);
            const borneInf: number = parseInt(lineSplitted[1]);
            const borneSup: number = parseInt(lineSplitted[2]);
            const charac: string = lineSplitted[3];
            const password: string = lineSplitted[4];
            if (this.validPolicy2(borneInf, borneSup, charac, password)) {
                total++;
            }

        }
        return total;
    }

    validPolicy2(index1: number, index2: number, charac: string, password: string): boolean {
        return (password.charAt(index1 - 1) === charac) !== (password.charAt(index2 - 1) === charac);
    }

    getDay(): number {
        return 2;
    }
}
