import fs from 'fs';

export function readFile(filePath: string): string[] {

    return fs.readFileSync(filePath, 'utf8').split('\n');
}

export function readPassports(filePath: string): string[] {
    const lines = fs.readFileSync(filePath, 'utf8');
    return lines.split('\n\n');
}
