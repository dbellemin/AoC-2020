import {Day9} from './Day9';

describe('Day9', () => {

    describe('Part 1', () => {
        it('should return 127 for test', () => {

            const day = new Day9();
            day.testMode = true;
            day.stepLength = 5;
            expect(day.part1()).toStrictEqual(127);

        });
        it('should return 32321523', () => {

            const day = new Day9();
            day.stepLength = 25;

            expect(day.part1()).toStrictEqual(32321523);

        });
    });


    describe('Part 2', () => {
        it('should return 62 for test', () => {

            const day = new Day9();
            day.testMode = true;
            day.stepLength = 5;
            expect(day.part2()).toStrictEqual(62);

        });
        it('should return 4794981', () => {

            const day = new Day9();
            day.stepLength = 25;

            expect(day.part2()).toStrictEqual(4794981);

        });
    });
});

