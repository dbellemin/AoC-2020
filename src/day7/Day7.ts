import {readFile} from '../utils/readFile';
import {TreeNode} from './TreeNode';
import {Day} from '../Day';

export class Day7 extends Day{


    part1(): number {
        const lines: string[] = readFile(this.getFilePath());
        let parentKeys: string[] = [];

        let allNodes: TreeNode[] = lines.map(l => this.parseNode(l));

        let currenAncestors: string[] = this.getDirectAncestors('shiny gold', allNodes);

        while (currenAncestors.length > 0) {
            let tempAncestors = [];
            for (let anc of currenAncestors) {
                if (parentKeys.indexOf(anc) === -1) {
                    parentKeys.push(anc);
                    tempAncestors.push(...this.getDirectAncestors(anc, allNodes));
                }
            }
            currenAncestors = tempAncestors;
        }


        return parentKeys.length;
    }

    getDirectAncestors(searchKey: string, allNodes: TreeNode[]): string[] {
        let ancestors: TreeNode[] = allNodes.filter(node => node.children.has(searchKey));
        return ancestors.map(a => a.key);
    }


    parseNode(line: string): TreeNode {
        const node = new TreeNode();
        node.children = new Map();

        const splittedKey = line.split(/(.*) bags contain(.*)+/)
        node.key = splittedKey[1];
        const allValues: string[] = splittedKey[2].split(',');
        if (allValues[0] === ' no other bags.') {
            return node;
        }
        for (let value of allValues) {
            const valueSplitted = value.split(/(\d+) (.*)( bag| bags).*/);
            node.children.set(valueSplitted[2], parseInt(valueSplitted[1]));
        }
        return node;

    }


    part2(): number {
        const lines: string[] = readFile(this.getFilePath());
        let allNodes: TreeNode[] = lines.map(l => this.parseNode(l));
        const root = allNodes.find(n => n.key === 'shiny gold');
        return this.getCurrentBagContent(root, allNodes);

    }

    getCurrentBagContent(node: TreeNode, allNodes: TreeNode[]): number {
        let total = 0;
        for (const [key, value] of node.children.entries()) {
            total += value;
            total += value * this.getCurrentBagContent(allNodes.find(n => n.key === key), allNodes);
        }
        return total;
    }

    getDay(): number {
        return 7;
    }
}

