import {Day3} from './Day3';

describe('Day3', () => {

  it('Part 1 should return 159', () => {

    const day = new Day3();
    expect(day.part1()).toStrictEqual(159);

  });

  it('Part 2 should return 6419669520', () => {

    const day = new Day3();
    expect(day.part2()).toStrictEqual(6419669520);
  });
});

