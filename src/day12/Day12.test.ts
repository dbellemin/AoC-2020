import {Day12} from './Day12';

describe('Day12', () => {

    describe('Part 1', () => {
        it('should return 25 for test', () => {

            const day = new Day12();
            day.testMode = true;

            expect(day.part1()).toStrictEqual(25);

        });
        it('should return 362', () => {

            const day = new Day12();

            expect(day.part1()).toStrictEqual(362);

        });
    });


    describe('Part 2', () => {
        it('should return 286 for test', () => {

            const day = new Day12();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(286);

        });
        it('should return 29895', () => {

            const day = new Day12();

            expect(day.part2()).toStrictEqual(29895);

        });
    });
});

