import { Months } from "./Months";

export class ZodiacDate {    
    readonly date: number;
    readonly month: Months;    

    constructor(date: number, month: Months) {
        this.date = date;
        this.month = month;
    }
}