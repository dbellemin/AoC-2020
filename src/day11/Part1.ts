import {EMPTY, OCCUPIED} from './Day11Constants';

export class Part1 {
    static computeSeatValue(x: number, y: number, previousConfig: string[][]): string {
        // If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
        let currentValue: string = previousConfig[y][x];
        if (currentValue === EMPTY) {
            //empty seat
            if (Part1.getAdjacentSeats(x, y, previousConfig).indexOf(OCCUPIED) === -1) {
                return OCCUPIED;
            }

        }
        //If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
        if (currentValue === OCCUPIED) {
            //occupied seat
            if (Part1.getAdjacentSeats(x, y, previousConfig).filter(v => v === OCCUPIED).length >= 4) {
                return EMPTY;
            }

        }
        return previousConfig[y][x];
    }

    static getAdjacentSeats(x, y, allSeats: string[][]): string[] {
            let adjacents = [];
            if (y >= 1) {
                if (x >= 1) {
                    adjacents.push(Part1.getSeat(x - 1, y - 1, allSeats));
                }
                adjacents.push(Part1.getSeat(x, y - 1, allSeats));
                if (x < allSeats[0].length - 1) {
                    adjacents.push(Part1.getSeat(x + 1, y - 1, allSeats));

                }
            }
            if (x >= 1) {
                adjacents.push(Part1.getSeat(x - 1, y, allSeats));
            }
            if (x < allSeats[0].length - 1) {
                adjacents.push(Part1.getSeat(x + 1, y, allSeats));

            }
            if (y < allSeats.length - 1) {
                if (x >= 1) {
                    adjacents.push(Part1.getSeat(x - 1, y + 1, allSeats));
                }
                adjacents.push(Part1.getSeat(x, y + 1, allSeats));
                if (x < allSeats[0].length - 1) {
                    adjacents.push(Part1.getSeat(x + 1, y + 1, allSeats));

                }
            }

            return adjacents;
        }

    static getSeat(x, y, seats) {
            return seats[y][x];
        }

}