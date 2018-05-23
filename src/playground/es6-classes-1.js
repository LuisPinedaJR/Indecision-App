
class Person  {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi, I am ' + this.name + '!';
        if(this.name){
            return `Hi. I am ${this.name}!`;
        }else{
            return `A girl has no name.`;
        }
    }
    getDescription(){
        return `Student ${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age , major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.location){
            greeting += ` I'm visiting from ${this.location}.`;
        }else{
            greeting += ` A girl is from nowhere.`;
        }
        return greeting;
    }
}

const me = new Traveler('Luis Pineda', 30, 'Bravos');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());