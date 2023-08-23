export class Admin {

    public firstName: string;
    public lastName: string;
    public description: string;
    public email: string;
    public password: string;

    constructor(firstName: string, lastName: string, description: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.email = email;
        this.password = password;
    }
}
