import {readFile} from '../utils/readFile';
import {Day} from '../Day';

export class Day13 extends Day {


    part1(): number {
        const time: number = parseInt(readFile(this.getFilePath())[0]);
        const allBus: number[] = readFile(this.getFilePath())[1].split(',').filter(b => b !== 'x').map(b => parseInt(b));

        let mem = [];
        allBus.forEach(b => {
            let busInfo = [];
            busInfo.push(b);
            let objectif = Math.trunc(((time + b) / b)) * b;
            busInfo.push(objectif - time);
            mem.push(busInfo)
        });

        let currentMin = mem[0];
        for (let m of mem) {
            if (m[1] < currentMin[1]) {
                currentMin = m;
            }
        }

        return currentMin[0] * currentMin[1];
    }


    part2(): bigint {

        return this.computeList(readFile(this.getFilePath())[1]);
    }

    computeList(line): bigint {
        const allBus: string[] = line.split(',');

        let busSorted = [];
        for (let i = 0; i < allBus.length; i++) {
            if (allBus[i] !== 'x') {
                busSorted.push([BigInt(parseInt(allBus[i])), BigInt(i)])
            }
        }

        let totalRes: bigint = BigInt(0);

        let M: bigint = busSorted.reduce((acc: bigint, b) => acc * b[0], BigInt(1));

        // https://www.apprendre-en-ligne.net/crypto/rabin/resteschinois.html
        for (let i = 0; i < busSorted.length; i++) {
            // t mod busSorted[i][0]  =  busSorted[i][1]
            let ai: bigint = busSorted[i][1];
            let mi: bigint = busSorted[i][0];
            let Mi = M / mi;
            let yi = BigInt(this.modInverse(Mi, mi)); //modulo inverse Mi-1 mod mi
            let x: bigint = ai * Mi * yi;
            totalRes += x;
        }
        //reste chinois attendu 1249295420704216
        return M - (totalRes % M);
    }

    modInverse(a, m) {
        // validate inputs
        [a, m] = [Number(a), Number(m)]
        if (Number.isNaN(a) || Number.isNaN(m)) {
            return NaN // invalid input
        }
        a = (a % m + m) % m
        if (!a || m < 2) {
            return NaN // invalid input
        }
        // find the gcd
        const s = []
        let b = m
        while (b) {
            [a, b] = [b, a % b]
            s.push({a, b})
        }
        if (a !== 1) {
            return NaN // inverse does not exists
        }
        // find the inverse
        let x = 1
        let y = 0
        for (let i = s.length - 2; i >= 0; --i) {
            [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)]
        }
        return (y % m + m) % m
    }


    getDay(): number {
        return 13;
    }
}

