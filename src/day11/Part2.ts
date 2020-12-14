import {EMPTY, NO_SEAT, OCCUPIED} from './Day11Constants';

export class Part2 {
    static computeSeatValue(x: number, y: number, previousConfig: string[][]): string {
        // If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
        let currentValue: string = previousConfig[y][x];
        if (currentValue === EMPTY) {
            //empty seat
            if (Part2.getAdjacentSeats(x, y, previousConfig).indexOf(OCCUPIED) === -1) {
                return OCCUPIED;
            }

        }
        //If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
        if (currentValue === OCCUPIED) {
            //occupied seat
            if (Part2.getAdjacentSeats(x, y, previousConfig).filter(v => v === OCCUPIED).length >= 5) {
                return EMPTY;
            }

        }
        return previousConfig[y][x];
    }

    static getAdjacentSeats(x, y, allSeats: string[][]): string[] {
        let adjacents = [];

        //Exploration diagonale haut gauche
        let current = NO_SEAT;
        let i = 1;
        let j = 1;

        while (current === NO_SEAT && (x - i) >= 0 && (y - j) >= 0) {
            current = Part2.getSeat(x - i, y - j, allSeats);
            i++;
            j++;
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration hauteur
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT && (y - j) >= 0) {
            current = Part2.getSeat(x, y - j, allSeats);

            j++;

        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration diagonale haut droite
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (x + i) < allSeats[0].length && (y - j) >= 0) {
            current = Part2.getSeat(x + i, y - j, allSeats);
            i++;
            j++;
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration  droite
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (x + i) < allSeats[0].length) {
            current = Part2.getSeat(x + i, y, allSeats);
            i++;
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration diagonale bas droite
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (x + i) < allSeats[0].length && (y + j) < allSeats.length) {
            current = Part2.getSeat(x + i, y + j, allSeats);
            i++;
            j++;
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }
        //Exploration  bas
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (y + j) < allSeats.length) {
            current = Part2.getSeat(x, y + j, allSeats);
            j++;
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration  diagonale bas gauche
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (x - i) >= 0 && (y + j) < allSeats.length) {
            current = Part2.getSeat(x - i, y + j, allSeats);
            j++;
            i++
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }

        //Exploration  gauche
        current = NO_SEAT;
        i = 1;
        j = 1;

        while (current === NO_SEAT
        && (x - i) >= 0) {
            current = Part2.getSeat(x - i, y, allSeats);
            i++
        }
        if (current !== NO_SEAT) {
            adjacents.push(current);
        }
        return adjacents;
    }

    static getSeat(x, y, seats) {
        return seats[y][x];
    }

}