import {Day19} from './Day19';

describe('Day19', () => {
    describe('Part 1', () => {
        it('should return 0 for test', () => {

            const day = new Day19();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(0);

        });
        it('should return 0', () => {

            const day = new Day19();

            expect(day.part1()).toStrictEqual(0);

        });
    });


    describe('Part 2', () => {
        it('should return 0 for test', () => {

            const day = new Day19();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(0);

        });
        it('should return 0', () => {

            const day = new Day19();

            expect(day.part2()).toStrictEqual(0);

        });
    });
});

