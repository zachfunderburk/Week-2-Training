class Person
{
    firstname:string;
    lastname:string;

    constructor(firstname:string, lastname:string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName(): string
    {
            return "My Name is " + this.firstname + ' ' + this.lastname;
    }
}

let newName = new Person ('Zach', 'Funderburk');
console.log(newName.getName());