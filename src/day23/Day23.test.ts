import {Day23} from './Day23';

describe('Day23', () => {
    describe('Part 1', () => {
        it('should return 0 for test', () => {

            const day = new Day23();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(0);

        });
        it('should return 0', () => {

            const day = new Day23();

            expect(day.part1()).toStrictEqual(0);

        });
    });


    describe('Part 2', () => {
        it('should return 0 for test', () => {

            const day = new Day23();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(0);

        });
        it('should return 0', () => {

            const day = new Day23();

            expect(day.part2()).toStrictEqual(0);

        });
    });
});

