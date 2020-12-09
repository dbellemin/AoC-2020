import {Day} from '../Day';
import {readFile} from '../utils/readFile';

export class Day5 extends Day {

    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        let max: number = 0;
        for (let seat of lines) {
            const seatId: number = this.computeSeatId(seat);
            if (seatId > max) {
                max = seatId;
            }
        }

        return max;
    }

    computeSeatId(seat: string): number {
        const rowIndications = seat.substr(0, 7);
        const row: number = this.computeRow(rowIndications);

        const columnIndications = seat.substr(7, 9);
        const column: number = this.computeColumn(columnIndications);

        return (row * 8) + column;

    }

    computeRow(rowIndications: string): number {
        let minStart = 0;
        let maxStart = 127;
        for (let i = 0; i < 8; i++) {
            const char = rowIndications.charAt(i);
            if (char === 'F') {
                maxStart = maxStart - Math.trunc((maxStart - minStart) / 2) - 1;
                if (i === 7) {
                    return minStart;
                }
            }
            if (char === 'B') {
                minStart = minStart + Math.trunc((maxStart - minStart) / 2) + 1;

                if (i === 7) {
                    return maxStart;
                }
            }

        }
        return maxStart;

    }

    computeColumn(columnIndications: string): number {

        let minStart = 0;
        let maxStart = 7;
        for (let i = 0; i < 4; i++) {
            const char = columnIndications.charAt(i);
            if (char === 'L') {
                maxStart = maxStart - Math.trunc((maxStart - minStart) / 2) - 1;
                if (i === 3) {
                    return minStart;
                }
            }
            if (char === 'R') {
                minStart = minStart + Math.trunc((maxStart - minStart) / 2) + 1;

                if (i === 3) {
                    return maxStart;
                }
            }

        }
        return maxStart;


    }


    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        let allSeatsFilled = [];
        for (let seat of lines) {
            const seatId: number = this.computeSeatId(seat);
            allSeatsFilled.push(seatId);
        }

        allSeatsFilled = allSeatsFilled.sort();
        for (let i = 1; i < allSeatsFilled.length - 1; i++) {
            if (allSeatsFilled[i] - allSeatsFilled[i - 1] > 1) {
                return allSeatsFilled[i] - 1;
            }
        }
        return 0;
    }

    getDay(): number {
        return 5;
    }
}

