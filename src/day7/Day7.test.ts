import {Day7} from './Day7';
import {TreeNode} from './TreeNode';

describe('Day7', () => {

    describe('should parse node from line', () => {

        it('light red bags contain 1 bright white bag, 2 muted yellow bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'light red';
            expectedNode.children = new Map();
            expectedNode.children.set('bright white', 1);
            expectedNode.children.set('muted yellow', 2);

            expect(day7.parseNode('light red bags contain 1 bright white bag, 2 muted yellow bags.')).toStrictEqual(expectedNode);

        });

        it('dark orange bags contain 3 bright white bags, 4 muted yellow bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'dark orange';
            expectedNode.children = new Map();
            expectedNode.children.set('bright white', 3);
            expectedNode.children.set('muted yellow', 4);

            expect(day7.parseNode('dark orange bags contain 3 bright white bags, 4 muted yellow bags.')).toStrictEqual(expectedNode);

        });
        it('bright white bags contain 1 shiny gold bag ', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'bright white';
            expectedNode.children = new Map();
            expectedNode.children.set('shiny gold', 1);

            expect(day7.parseNode('bright white bags contain 1 shiny gold bag')).toStrictEqual(expectedNode);

        });
        it('muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'muted yellow';
            expectedNode.children = new Map();
            expectedNode.children.set('shiny gold', 2);
            expectedNode.children.set('faded blue', 9);

            expect(day7.parseNode('muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.')).toStrictEqual(expectedNode);

        });
        it('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'shiny gold';
            expectedNode.children = new Map();
            expectedNode.children.set('dark olive', 1);
            expectedNode.children.set('vibrant plum', 2);

            expect(day7.parseNode('shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.')).toStrictEqual(expectedNode);

        });
        it('dark olive bags contain 3 faded blue bags, 4 dotted black bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'dark olive';
            expectedNode.children = new Map();
            expectedNode.children.set('faded blue', 3);
            expectedNode.children.set('dotted black', 4);

            expect(day7.parseNode('dark olive bags contain 3 faded blue bags, 4 dotted black bags.')).toStrictEqual(expectedNode);

        });
        it('vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'vibrant plum';
            expectedNode.children = new Map();
            expectedNode.children.set('faded blue', 5);
            expectedNode.children.set('dotted black', 6);

            expect(day7.parseNode('vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.')).toStrictEqual(expectedNode);

        });
        it('faded blue bags contain no other bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'faded blue';
            expectedNode.children = new Map();

            expect(day7.parseNode('faded blue bags contain no other bags.')).toStrictEqual(expectedNode);

        });
        it('dotted black bags contain no other bags.', () => {
            const day7 = new Day7();
            const expectedNode = new TreeNode();
            expectedNode.key = 'dotted black';
            expectedNode.children = new Map();

            expect(day7.parseNode('dotted black bags contain no other bags.')).toStrictEqual(expectedNode);

        });
    });

    describe('Part 1', () => {
        it('should return 4 with test datas', () => {

            const day7 = new Day7();
            day7.testMode = true;
            expect(day7.part1()).toStrictEqual(4);
        });
        it('should return 131 with real datas', () => {

            const day7 = new Day7();
            expect(day7.part1()).toStrictEqual(131);
        });
    });

    describe('Part 2', () => {
        it('should return 32 with test datas', () => {

            const day7 = new Day7();
            day7.testMode = true;
            expect(day7.part2()).toStrictEqual(32);
        });
        it('should return 11261 with real datas', () => {

            const day7 = new Day7();
            expect(day7.part2()).toStrictEqual(11261);
        });
    });
});

