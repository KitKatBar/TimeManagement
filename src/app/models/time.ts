import { Timecard } from "./timecard";

export class Time {
    public hour: number;
    public minute: number;
    public timecard: Timecard;

    constructor(hour: number, minute: number, timecard: Timecard) {
        this.hour = hour;
        this.minute = minute;
        this.timecard = timecard;
    }
}
