import {readFile} from '../utils/readFile';
import {Day} from '../Day';
import {NO_SEAT, OCCUPIED} from './Day11Constants';
import {Part1} from './Part1';
import {Part2} from './Part2';


export class Day11 extends Day {


    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        let allSeats: string[][] = lines.map(line => line.split(''));

        let alreadySeenConfigs: string[][][] = [];
        let lastConfig = allSeats;

        while (!this.isAlreadySeenConfig(alreadySeenConfigs, lastConfig)) {
            alreadySeenConfigs.push(lastConfig);
            lastConfig = this.computeNextConfig(lastConfig, Part1.computeSeatValue);
        }

        return this.getNbOccupiedSeats(lastConfig);

    }

    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        let allSeats: string[][] = lines.map(line => line.split(''));

        let alreadySeenConfigs: string[][][] = [];
        let lastConfig = allSeats;

        while (!this.isAlreadySeenConfig(alreadySeenConfigs, lastConfig)) {
            alreadySeenConfigs.push(lastConfig);
            lastConfig = this.computeNextConfig(lastConfig, Part2.computeSeatValue);
        }

        return this.getNbOccupiedSeats(lastConfig);


    }

    private computeNextConfig(lastConfig: string[][], seatTransformer: (iSeat: number, iRow: number, config: string[][]) => string): string[][] {
        let next = lastConfig.map(row => row.map(_ => NO_SEAT));
        for (let iRow = 0; iRow < lastConfig.length; iRow++) {
            let rowSeats = lastConfig[iRow];
            for (let iSeat = 0; iSeat < rowSeats.length; iSeat++) {
                let newSeatValue = seatTransformer(iSeat, iRow, lastConfig);
                next[iRow][iSeat] = newSeatValue;
            }
        }
        return next;
    }


    private isAlreadySeenConfig(alreadySeenConfigs: string[][][], config: string[][]) {
        for (let alreadySeenConfig of alreadySeenConfigs) {
            if (this.areEqualsConfigurations(alreadySeenConfig, config)) {
                return true;
            }
        }
        return false;
    }


    private areEqualsConfigurations(config1: string[][], config2: string[][]): boolean {
        for (let i = 0; i < config1.length; i++) {
            let row = config1[i];
            for (let j = 0; j < row.length; j++) {
                if (config2[i][j] !== config1[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }


    private getNbOccupiedSeats(configuration: string[][]) {
        let nbSeats = 0;


        configuration.forEach(row => {
            row.forEach(seat => {
                if (seat === OCCUPIED) {
                    nbSeats++;

                }
            })
        });
        return nbSeats;

    }

    getDay(): number {
        return 11;
    }

}

