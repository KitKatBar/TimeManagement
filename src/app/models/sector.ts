import { Doctor } from "./doctor";
import { Location } from "./location";

export class Sector {
    
    public id: number;
    public name: string;
    public location: Location;
    public doctors: Doctor[];

    constructor(id: number, name: string, location: Location, doctors: Doctor[]) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.doctors = doctors;
    }
}
