import { Time } from './time';
import { Doctor} from './doctor';

export class Timecard {

    public date: Date;
    public hours: number;
    public time: Time[];
    public doctor:Doctor;

    constructor(date: Date, hours: number, time: Time[], doctor: Doctor) {
        this.date = date;
        this.hours = hours;
        this.time = time;
        this.doctor = doctor
    }
}