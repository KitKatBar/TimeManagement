import { Role } from "./role";
import { Location } from "./location";
import { Sector } from "./sector";
import { Timecard } from "./timecard";

export class Doctor {
      
      public id: number;
      public firstName: string;
      public lastName: string;
      public fileNumber: number;
      public sector: Sector;
      public timecards: Timecard[];

      constructor(id: number, firstName: string, lastName: string, fileNumber: number,
            sector: Sector, timecards: Timecard[]) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.fileNumber = fileNumber;
            this.sector = sector;
            this.timecards = timecards;
      }
}
