import { Sector} from "./sector";

export class Location {
    
    public id: number;
    public name: string;
    public sectors: Sector[];

    constructor(id: number, name: string, sectors: Sector[]) {
        this.id = id;
        this.name = name;
        this.sectors = sectors;
    }
} 
