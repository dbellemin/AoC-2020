import {readPassports} from '../utils/readFile';
import {Day} from '../Day';


export class Day4 extends Day {

    part1(): number {
        let validPassports: number = 0;
        const requiredFields: string[] = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; //cid

        const passports: string[] = readPassports(this.getFilePath());
        for (let passport of passports) {
            const passportInfos = [];
            const lines: string[] = passport.split('\n');
            for (let line of lines) {
                const lineInfos: string[] = line.split(' ');
                for (let lineInfo of lineInfos) {
                    const info: string[] = lineInfo.split(':');
                    passportInfos.push(info[0]);
                }

            }
            if (requiredFields.every(requiredField => passportInfos.indexOf(requiredField) !== -1)) {
                validPassports++;
            }
        }
        return validPassports;

    }


    part2(): number {
        let validPassports: number = 0;
        const requiredFields: string[] = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; //cid

        const passports: string[] = readPassports(this.getFilePath());
        for (let passport of passports) {
            const passportInfos = [];
            const lines: string[] = passport.split('\n');
            for (let line of lines) {
                const lineInfos: string[] = line.split(' ');
                for (let lineInfo of lineInfos) {
                    const info: string[] = lineInfo.split(':');
                    if (this.validateValue(info[0], info[1])) {
                        passportInfos.push(info[0]);
                    }
                }

            }
            if (requiredFields.every(requiredField => passportInfos.indexOf(requiredField) !== -1)) {
                // all fields presents, check them
                validPassports++;
            }
        }
        return validPassports;
    }

    validateValue(key: string, value: string): boolean {
        switch (key) {
            case 'byr':
                return this.validByr(value);
            case 'iyr' :
                return this.validIyr(value);
            case 'eyr' :
                return this.validEyr(value);
            case 'hgt':
                return this.validHgt(value);
            case 'hcl':
                return this.validHcl(value);
            case 'ecl':
                return this.validEcl(value);
            case 'pid' :
                return this.validPid(value);
            case 'cid' :
                return true;
            default: {
                return false;
            }

        }
    }

    //    byr (Birth Year) - four digits; at least 1920 and at most 2002.
    validByr(byr: string): boolean {
        return parseInt(byr) >= 1920 && parseInt(byr) <= 2002;
    }

    //iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    validIyr(iyr: string): boolean {
        return parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020;
    }

    //eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    validEyr(eyr: string): boolean {
        return parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030;
    }

    //hgt (Height) - a number followed by either cm or in:
    //If cm, the number must be at least 150 and at most 193.
    //If in, the number must be at least 59 and at most 76.
    validHgt(hgt: string): boolean {
        const heightSplitted: string[] = hgt.split(/^(\d+)(cm|in)$/);
        if (heightSplitted[2] === 'cm') {
            return parseInt(heightSplitted[1]) >= 150 && parseInt(heightSplitted[1]) <= 193;
        } else if (heightSplitted[2] === 'in') {
            return parseInt(heightSplitted[1]) >= 59 && parseInt(heightSplitted[1]) <= 76;
        }
        return false;
    }


    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    validHcl(hcl: string): boolean {
        return /#[0-9a-f]{6}/.test(hcl);
    }

    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth
    validEcl(ecl: string): boolean {
        return ecl === 'amb' || ecl === 'blu' || ecl === 'brn' || ecl === 'gry' || ecl === 'grn' || ecl === 'hzl' || ecl === 'oth';
    }

    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    validPid(pid: string): boolean {
        return /^\d{9}$/.test(pid);
    }

    getDay(): number {
        return 4;
    }
}

