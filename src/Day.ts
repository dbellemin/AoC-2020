import * as path from 'path';

export abstract class Day {
    abstract getDay(): number;

    abstract part1(): number;

    abstract part2(): number | bigint;

    testMode: boolean;

    getFilePath(dayCode = this.getDay()) {

        if (this.testMode) {
            return path.resolve(__dirname, '../resources/test/' + dayCode  + '.txt');

        }
        return path.resolve(__dirname, `../resources/${dayCode}.txt`);

    }
}