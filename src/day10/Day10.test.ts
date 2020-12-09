import {Day10} from './Day10';

describe('Day10', () => {
    describe('Part 1', () => {
        it('should return x for test', () => {

            const day = new Day10();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(0);

        });
        it('should return x', () => {

            const day = new Day10();

            expect(day.part1()).toStrictEqual(0);

        });
    });


    describe('Part 2', () => {
        it('should return x for test', () => {

            const day = new Day10();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(0);

        });
        it('should return x', () => {

            const day = new Day10();

            expect(day.part2()).toStrictEqual(0);

        });
    });
});

