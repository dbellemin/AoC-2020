import {Day10} from './Day10';

describe('Day10', () => {
    describe('Part 1', () => {
        it('should return 220 for test', () => {

            const day = new Day10();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(220);

        });
        it('should return 2048', () => {

            const day = new Day10();

            expect(day.part1()).toStrictEqual(2048);

        });
    });


    describe('Part 2', () => {
        it('should return 19208 for test', () => {

            const day = new Day10();
            day.testMode = true;
            expect(day.part2()).toStrictEqual(19208);

        });
        it('should return 1322306994176', () => {

            const day = new Day10();

            expect(day.part2()).toStrictEqual(1322306994176);

        });
    });
});

