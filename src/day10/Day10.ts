import {readFile} from '../utils/readFile';
import {Day} from '../Day';

export class Day10 extends Day {


    part1(): number {
        const lines: number[] = readFile(this.getFilePath()).map(l => parseInt(l));

        lines.sort((a, b) => a - b);
        let step1 = 1;
        let step3 = 1;

        for (let i = 1; i < lines.length; i++) {
            if (lines[i] - lines[i - 1] === 1) {
                step1++;
            }
            if (lines[i] - lines[i - 1] === 3) {
                step3++;
            }
        }
        return step1 * step3;
    }


    part2(): number {
        const lines: number[] = [0];
        lines.push(...readFile(this.getFilePath()).map(l => parseInt(l)));
        lines.sort((a, b) => a - b);
        lines.push(lines[lines.length - 1] + 3);


        let pathsCount = [];
        for (let i = 0; i < lines.length; i++) {
            if (i === 0) {
                pathsCount[i] = 1; // 1 chemin pour aller à 0
            } else {
                pathsCount[i] = 0;
                for (let j = i - 1; j >= 0; j--) {
                    // on regarde si l'élément à i est atteignable depuis ses prédecesseurs
                    if (lines[i] - lines[j] <= 3) {
                        // on incrémente le nombre de chemins pour arriver à i du nombre de chemins pour arriver à j
                        pathsCount[i] += pathsCount[j];
                    } else
                        break;
                }
            }
        }


        // e dernier élément contient le nombre e chemins pour y arriver
        return pathsCount[pathsCount.length - 1];


    }

    getDay(): number {
        return 10;
    }


}

