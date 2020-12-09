import {readFile} from '../utils/readFile';
import {Day} from '../Day';

export class Day9 extends Day {

    stepLength: number;

    part1(): number {
        const lines: number[] = readFile(this.getFilePath()).map(l => parseInt(l));

        let currentIndex = this.stepLength;
        while (currentIndex < lines.length) {
            const noSum = this.computeValue(currentIndex, lines);
            if (noSum) {
                return lines[currentIndex];
            }
            currentIndex++;
        }

        return 0;

    }

    computeValue(currentIndex, allValues: number[]): boolean {
        const searchValue = allValues[currentIndex];
        let i = currentIndex - this.stepLength;

        while (i < currentIndex) {
            let j = currentIndex - this.stepLength;
            while (j < currentIndex) {
                if (i !== j && (allValues[i] + allValues[j] === searchValue)) {
                    return false;
                }
                j++;
            }
            i++;
        }
        return true;
    }


    part2(): number {
        const lines: number[] = readFile(this.getFilePath()).map(l => parseInt(l));
        let currentIndex = this.stepLength;
        let valueSearch = 0;
        let valueIndex = 0;
        while (currentIndex < lines.length) {
            const noSum = this.computeValue(currentIndex, lines);
            if (noSum) {
                valueSearch = lines[currentIndex];
                valueIndex = currentIndex;
                break;
            }
            currentIndex++;
        }


        let i = 0;
        while (i < currentIndex) {
            let j = currentIndex;
            while (j > 0) {
                let elements = [];
                for (let e = i; e < j; e++) {
                    elements.push(lines[e]);
                }
                let sum = elements.reduce((acc, currentValue) => acc += currentValue, 0);
                if (sum === valueSearch) {
                    return Math.min(...elements) + Math.max(...elements);
                }
                j--;
            }
            i++;
        }

        return 0;


    }

    getDay(): number {
        return 9;
    }


}

