export class Instruction{
    command: string;
    value: number;


    constructor(line : string) {
        this.command = line.substr(0, 1);
        this.value = parseInt(line.substr(1, line.length));
    }
}