import {Day13} from './Day13';

describe('Day13', () => {

    describe('Part 1', () => {
        it('should return 295 for test', () => {

            const day = new Day13();
            day.testMode = true;

            expect(day.part1()).toStrictEqual(295);

        });
        it('should return 3246', () => {

            const day = new Day13();

            expect(day.part1()).toStrictEqual(3246);

        });
    });


    describe('Part 2', () => {
        it('should return 3417 for test', () => {

            const day = new Day13();
            day.testMode = true;
            expect(day.computeList('17,x,13,19')).toStrictEqual(BigInt(3417));

        });
        it('should return 754018 for test', () => {

            const day = new Day13();
            day.testMode = true;
            expect(day.computeList('67,7,59,61')).toStrictEqual(BigInt(754018));

        });
        it('should return 779210 for test', () => {

            const day = new Day13();
            day.testMode = true;
            expect(day.computeList('67,x,7,59,61')).toStrictEqual(BigInt(779210));

        });
        it('should return 1261476 for test', () => {

            const day = new Day13();
            day.testMode = true;
            expect(day.computeList('67,7,x,59,61')).toStrictEqual(BigInt(1261476));

        });
        it('should return 1202161486 for test', () => {

            const day = new Day13();
            day.testMode = true;
            expect(day.computeList('1789,37,47,1889')).toStrictEqual(BigInt(1202161486));

        });

        it('should return 1010182346291467', () => {

            const day = new Day13();

            expect(day.part2()).toStrictEqual(BigInt(1010182346291467));

        });
    });
});

