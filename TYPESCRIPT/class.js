var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.getName = function () {
        return "My Name is " + this.firstname + ' ' + this.lastname;
    };
    return Person;
}());
var newName = new Person('Zach', 'Funderburk');
console.log(newName.getName());
