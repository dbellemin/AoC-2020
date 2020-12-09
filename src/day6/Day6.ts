import {readPassports} from '../utils/readFile';
import {Day} from '../Day';

export class Day6 extends Day {


    part1(): number {
        const groups: string[] = readPassports(this.getFilePath());
        let total = 0;
        for (let group of groups) {
            group = group.replace(/\n/g, '');
            let mapOfChars = new Map();
            for (let character of group.split('')) {
                mapOfChars.set(character, character);
            }
            total += mapOfChars.size;

        }
        return total;
    }


    part2(): number {
        const groups: string[] = readPassports(this.getFilePath());
        let total = 0;
        for (let group of groups) {
            let personAnswers: string[] = group.split('\n');
            let mapOfChars: Map<string, number> = new Map();

            personAnswers.forEach(answer => {
                for (let letter of [...answer]) {
                    if (mapOfChars.has(letter)) {
                        mapOfChars.set(letter, mapOfChars.get(letter) + 1);
                    } else {
                        mapOfChars.set(letter, 1);
                    }
                }
            });
            for (let key of mapOfChars.keys()) {
                if (mapOfChars.get(key) === personAnswers.length) {
                    total++;
                }
            }

        }
        return total;
    }

    getDay(): number {
        return 6;
    }
}

