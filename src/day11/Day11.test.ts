import {Day11} from './Day11';

describe('Day11', () => {

    describe('Part 1', () => {
        it('should return 37 for test', () => {

            const day = new Day11();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(37);

        });
        it('should return 2438', () => {

            const day = new Day11();

            expect(day.part1()).toStrictEqual(2438);

        });
    });


    describe('Part 2', () => {
        it('should return 26 for test', () => {

            const day = new Day11();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(26);

        });
        it('should return 2174', () => {

            const day = new Day11();

            expect(day.part2()).toStrictEqual(2174);

        });
    });
});

