import {Day14} from './Day14';

describe('Day14', () => {
    describe('Part 1', () => {
        it('should return 165 for test', () => {

            const day = new Day14();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(165);

        });
        it('should return 14553106347726', () => {

            const day = new Day14();

            expect(day.part1()).toStrictEqual(14553106347726);

        });
    });


    describe('Part 2', () => {
        it('should return 208 for test', () => {

            const day = new Day14();
            day.testMode = true;
            day.dayCode = 141;
            expect(day.part2()).toStrictEqual(208);

        });
        it('should apply mask to index', () => {
            const day = new Day14();
            day.testMode = true;
            let newIndices = day.applyMaskToIndex('000000000000000000000000000000X1001X', Number(42).toString(2));

            expect(newIndices).toHaveLength(4);
            newIndices.forEach(ind =>
            expect([26,27,58,59]).toContain(parseInt(ind, 2)));

        })
        it('should return 2737766154126', () => {

            const day = new Day14();

            expect(day.part2()).toStrictEqual(2737766154126);

        });
    });
});

