import {readFile} from '../utils/readFile';
import {Day} from '../Day';
import {Instruction} from './Instruction';

export class Day12 extends Day {

    stepLength: number;

    part1(): number {
        const instructions: Instruction[] = readFile(this.getFilePath()).map(l => new Instruction(l));

        let direction = 'E';
        let x = 0;
        let y = 0;

        /*Action N means to move north by the given value.
        Action S means to move south by the given value.
        Action E means to move east by the given value.
        Action W means to move west by the given value.
        Action L means to turn left the given number of degrees.
        Action R means to turn right the given number of degrees.
        Action F means to move forward by the given value in the direction the ship is currently facing.*/
        for (let instruction of instructions) {
            switch (instruction.command) {
                case 'N' : {
                    y = y + instruction.value;
                    break;
                }
                case 'S' : {
                    y = y - instruction.value;
                    break;
                }
                case 'E' : {
                    x = x + instruction.value;
                    break;
                }
                case 'W' : {
                    x = x - instruction.value;
                    break;
                }
                case 'L' : {
                    direction = this.turnLeft(instruction.value, direction);
                    break;
                }
                case 'R' : {
                    direction = this.turnRight(instruction.value, direction);
                    break;
                }
                case 'F' : {
                    switch (direction) {
                        case 'N' : {
                            y = y + instruction.value;
                            break;
                        }
                        case 'S' : {
                            y = y - instruction.value;
                            break;
                        }
                        case 'E' : {
                            x = x + instruction.value;
                            break;
                        }
                        case 'W' : {
                            x = x - instruction.value;
                            break;
                        }

                    }
                }
            }

        }


        return Math.abs(x) + Math.abs(y);

    }


    turnLeft(degree, currentDirection): string {
        if (degree === 90) {
            switch (currentDirection) {
                case 'E' :
                    return 'N';
                case 'N':
                    return 'W';
                case 'W':
                    return 'S';
                case 'S' :
                    return 'E';

            }
        }
        if (degree === 180) {
            switch (currentDirection) {
                case 'E' :
                    return 'W';
                case 'N':
                    return 'S';
                case 'W':
                    return 'E';
                case 'S' :
                    return 'N';

            }
        }
        if (degree === 270) {
            switch (currentDirection) {
                case 'E' :
                    return 'S';
                case 'N':
                    return 'E';
                case 'W':
                    return 'N';
                case 'S' :
                    return 'W';

            }
        }

        return currentDirection;

    }

    turnRight(degree, currentDirection): string {
        if (degree === 90) {
            switch (currentDirection) {
                case 'E' :
                    return 'S';
                case 'N':
                    return 'E';
                case 'W':
                    return 'N';
                case 'S' :
                    return 'W';

            }
        }
        if (degree === 180) {
            switch (currentDirection) {
                case 'E' :
                    return 'W';
                case 'N':
                    return 'S';
                case 'W':
                    return 'E';
                case 'S' :
                    return 'N';

            }
        }
        if (degree === 270) {
            switch (currentDirection) {
                case 'E' :
                    return 'N';
                case 'N':
                    return 'W';
                case 'W':
                    return 'S';
                case 'S' :
                    return 'E';

            }
        }

        return currentDirection;

    }


    part2(): number {
        const instructions: Instruction[] = readFile(this.getFilePath()).map(l => new Instruction(l));

        let direction = 'E';
        let x = 0;
        let y = 0;
        let waypoint = [10, 1];

        /*Action N means to move the waypoint north by the given value.
        Action S means to move the waypoint south by the given value.
        Action E means to move the waypoint east by the given value.
        Action W means to move the waypoint west by the given value.
        Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
        Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
        Action F means to move forward to the waypoint a number of times equal to the given value.  {*/
        for (let instruction of instructions) {

            switch (instruction.command) {
                case 'N' : {
                    waypoint[1] = waypoint[1] + instruction.value;
                    break;
                }
                case 'S' : {
                    waypoint[1] = waypoint[1] - instruction.value;
                    break;
                }
                case 'E' : {
                    waypoint[0] = waypoint[0] + instruction.value;
                    break;
                }
                case 'W' : {
                    waypoint[0] = waypoint[0] - instruction.value;
                    break;
                }
                case 'L' : {
                    waypoint = this.turnWaypointLeft(instruction.value, waypoint);
                    break;
                }
                case 'R' : {
                    waypoint = this.turnWaypointRight(instruction.value, waypoint);
                    break;
                }
                case 'F' : {
                    x = x + (instruction.value* waypoint[0]);
                    y = y + (instruction.value * waypoint[1]);
                    break;
                }
            }
        }


        return Math.abs(x) + Math.abs(y);


    }

    turnWaypointLeft(degree, waypoint: number[]): number[] {
            if (degree === 90) {
                return [-waypoint[1], waypoint[0]];
            }
            if (degree === 180) {
                return [-waypoint[0], -waypoint[1]];
            }
            if (degree === 270) {
                return [waypoint[1], -waypoint[0]];

            }
            return waypoint;

        }
    turnWaypointRight(degree, waypoint: number[]): number[] {
                if (degree === 90) {
                    return [waypoint[1], -waypoint[0]];
                }
                if (degree === 180) {
                    return [-waypoint[0], -waypoint[1]];
                }
                if (degree === 270) {
                    return [-waypoint[1], waypoint[0]];

                }
                return waypoint;

            }


    getDay(): number {
        return 12;
    }


}

