import {Day1} from './Day1';

describe('Day1', () => {

  it('Part 1 should return 567171', () => {

    const day1 = new Day1();
    expect(day1.part1()).toStrictEqual(567171);

  });

  it('Part 2 should return 212428694', () => {

    const day1 = new Day1();
    expect(day1.part2()).toStrictEqual(212428694);
  });
});

