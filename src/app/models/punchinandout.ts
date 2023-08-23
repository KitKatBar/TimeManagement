import { Time} from './time';
import { Doctor} from './doctor';

export class Punchinandout{
    public punchinoutdate: Date;
    public hours: number;
    public  time: Time[];
    public doctor:Doctor;
    constructor(punchinoutdate: Date, hours: number,time: Time[],doctor:Doctor) {
        this.punchinoutdate = punchinoutdate;
        this.hours = hours;
        this.time = time;
        this.doctor=doctor
    }
}
