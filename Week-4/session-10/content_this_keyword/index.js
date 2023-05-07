class Person {

    constructor(Name, Age, gender, nationality) {
        this.Name = Name;
        this.Age = Age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce() {
        return `Hi, I am ${this.Name}. My Age is ${this.Age}. I am a ${this.gender} and I am ${this.nationality}`;
    }

}

p1 = new Person("Dev", 26, "male", "Indian");
p2 = new Person("Saini", 22, "male", "Indian");
p3 = new Person("Shraddha", 23, "female", "Indian");

console.log(p1.introduce());
console.log(p2.introduce());
console.log(p3.introduce());



class Student extends Person {
    constructor(Name, Age, gender, nationality,subject) {
        super(Name, Age, gender, nationality);
        
        this.Name = Name;
        this.Age = Age;
        this.gender = gender;
        this.nationality = nationality;
        this.subject = subject;
    }

    study(){
        return `${this.Name} is studying ${this.subject}`
    }
}

s1 = new Student("Deva",24,"male","Indian","science");

console.log(s1.introduce());
console.log(s1.study());