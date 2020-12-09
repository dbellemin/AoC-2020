import * as path from 'path';

export abstract class Day {
    abstract getDay(): number;

    abstract part1(): number;

    abstract part2(): number;

    testMode: boolean;

    getFilePath() {
        if (this.testMode) {
            return path.resolve(__dirname, '../resources/test/' + this.getDay() + '.txt');

        }
        return path.resolve(__dirname, `../resources/${this.getDay()}.txt`);

    }
}