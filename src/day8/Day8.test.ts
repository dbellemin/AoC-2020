import {Day8} from './Day8';
import {InstructionEnum, Step} from './Step';

describe('Day8', () => {
    describe('parse step', () => {

        it('jmp -480', () => {
            const expectedStep = new Step();
            expectedStep.instruction = InstructionEnum.JUMP;
            expectedStep.value = -480;

            expect(Step.parseStep('jmp -480')).toStrictEqual(expectedStep);
        });
    });

    describe('Part 1', () => {
        it('should return 5 for test', () => {

            const day = new Day8();
            day.testMode = true;
            expect(day.part1()).toStrictEqual(5);

        });
        it('should return 1584', () => {

            const day = new Day8();
            expect(day.part1()).toStrictEqual(1584);

        });
    });


    describe('Part 2', () => {
            it('should return 8 for test', () => {

                const day = new Day8();
                day.testMode = true;
                expect(day.part2()).toStrictEqual(8);

            });
            it('should return 920', () => {

                const day = new Day8();
                expect(day.part2()).toStrictEqual(920);

            });
        });
});

