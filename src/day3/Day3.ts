import {readFile} from '../utils/readFile';
import {Day} from '../Day';


export class Day3 extends Day{
     part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        return this.deplacement(3, 1, lines);

    }

     deplacement(varX, varY, lines: string[]): number {
        let totalTrees = 0;
        let indexX = 0;
        let indexY = 0;
        while (indexY < lines.length - 1) {
            indexX = indexX + varX;
            indexY = indexY + varY;
            let currentElement;
            const currentLine = lines[indexY];

            if (currentLine.length > indexX) {
                currentElement = currentLine.charAt(indexX);
            } else {
                currentElement = currentLine.charAt(indexX % currentLine.length);
            }
            if (currentElement === '#') {
                totalTrees++;
            }
        }
        return totalTrees;

    }

     part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        return this.deplacement(1, 1, lines)
            * this.deplacement(3, 1, lines)
            * this.deplacement(5, 1, lines)
            * this.deplacement(7, 1, lines)
            * this.deplacement(1, 2, lines);
    }

    getDay(): number {
        return 3;
    }
}

